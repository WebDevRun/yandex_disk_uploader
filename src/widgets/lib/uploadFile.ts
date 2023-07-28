export async function uploadFile(
  path: string,
  method: string,
  file: FormDataEntryValue
) {
  const response = await fetch(path, {
    method,
    body: file,
  })

  return { status: response.status }
}
