interface IFileURL {
  operation_id: string
  href: string
  method: string
  templated: true
}

interface IError {
  message: string
  description: string
  error: string
}

export async function getFileURL(path: string) {
  const queryParams = new URLSearchParams({
    path,
  })

  const response = await fetch(
    `https://cloud-api.yandex.net/v1/disk/resources/upload?${queryParams}`,
    {
      headers: {
        Authorization: `OAuth ${import.meta.env.VITE_OAUTH_TOKEN}`,
      },
    }
  )

  if (response.ok) {
    const result: IFileURL = await response.json()
    return result
  }

  const error: IError = await response.json()
  throw error
}
