import { Container, Row, Col } from 'react-bootstrap'
import { FormEventHandler, useState } from 'react'
import { UploadFilesForm, MessageList } from '../../entities'
import { getFileURL } from '../lib/getFileURL'
import { uploadFile } from '../lib/uploadFile'

interface IMessage {
  isUploaded: boolean
  message: string
}

export function Main() {
  const [messages, setMessages] = useState<IMessage[]>([])

  const submitHandler: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()
    setMessages([])

    const formData = new FormData(event.currentTarget)
    const files: File[] = []

    for (const [, file] of formData) {
      if (!(file instanceof File)) continue

      files.push(file)
    }

    const getURLPromises = files.map((file) => getFileURL(file.name))
    const urlResponses = await Promise.allSettled(getURLPromises)

    const uploadFilesPromises = urlResponses.map((urlData, index) => {
      if (urlData.status === 'fulfilled') {
        return uploadFile(
          urlData.value.href,
          urlData.value.method,
          files[index]
        )
      }

      setMessages((prev) => [
        ...prev,
        {
          isUploaded: false,
          message: urlData.reason.message || 'Что-то пошло не так',
        },
      ])
    })

    const uploadedFileStatuses = await Promise.all(uploadFilesPromises)
    const uploadFiles: IMessage[] = []

    for (let i = 0; i < uploadedFileStatuses.length; i++) {
      if (uploadedFileStatuses[i] !== undefined) {
        uploadFiles.push({
          isUploaded: true,
          message: `Ресурс "${files[i].name}" загружен.`,
        })
      }
    }

    setMessages((prev) => [...prev, ...uploadFiles])
  }

  return (
    <Container>
      <Row>
        <Col className="mt-2 mb-2">
          <UploadFilesForm onSubmitHandler={submitHandler} />
        </Col>
      </Row>
      <MessageList messages={messages} />
    </Container>
  )
}
