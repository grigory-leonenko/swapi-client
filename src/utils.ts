export const getPersonId = (url: string) => {
  const path = new URL(url).pathname.split('/')

  return path[path.length - 2]
}
