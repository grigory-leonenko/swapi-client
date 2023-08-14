export const getPersonId = (url: string) => {
  const path = new URL(url).pathname.split('/')

  return path[path.length - 2]
}

export const getPersonLocalData = (key: string) => {
  const data = localStorage.getItem(key)

  if (data) {
    try {
      return JSON.parse(data)
    } catch (error) {
      console.log(error)
      return {}
    }
  }

  return {}
}
