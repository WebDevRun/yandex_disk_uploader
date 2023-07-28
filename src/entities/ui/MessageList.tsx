import { ListGroup } from 'react-bootstrap'

interface IMessage {
  isUploaded: boolean
  message: string
}

export function MessageList({ messages }: { messages: IMessage[] }) {
  return (
    <ListGroup as="ul">
      {messages.map(({ isUploaded, message }, index) => {
        return (
          <ListGroup.Item
            key={index}
            as="li"
            variant={isUploaded ? 'success' : 'danger'}
          >
            {message}
          </ListGroup.Item>
        )
      })}
    </ListGroup>
  )
}
