import { FormEventHandler } from 'react'

export function UploadFilesForm({
  onSubmitHandler,
}: {
  onSubmitHandler: FormEventHandler<HTMLFormElement>
}) {
  return (
    <form className="input-group" onSubmit={onSubmitHandler}>
      <input
        type="file"
        className="form-control"
        aria-describedby="inputGroupFileAddon04"
        aria-label="Upload"
        multiple
        name="file"
      />
      <button className="btn btn-outline-secondary">Загрузить</button>
    </form>
  )
}
