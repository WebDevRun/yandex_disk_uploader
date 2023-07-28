import { FormEventHandler, useState, ChangeEventHandler } from 'react'

export function UploadFilesForm({
  onSubmitHandler,
}: {
  onSubmitHandler: FormEventHandler<HTMLFormElement>
}) {
  const [isDisabled, setIsDisabled] = useState(true)

  const inputChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (event.currentTarget.value) setIsDisabled(false)
    else setIsDisabled(true)
  }

  return (
    <form className="input-group" onSubmit={onSubmitHandler}>
      <input
        type="file"
        className="form-control"
        aria-describedby="inputGroupFileAddon04"
        aria-label="Upload"
        multiple
        name="file"
        onChange={inputChangeHandler}
      />
      <button className="btn btn-outline-secondary" disabled={isDisabled}>
        Загрузить
      </button>
    </form>
  )
}
