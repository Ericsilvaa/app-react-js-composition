// localStorage
const getLocalStorage = () => {
  const data = JSON.parse(localStorage.getItem('db_clients')) || []
  console.log('🚀 ~ getLocalStorage ~ data:', data)
  return data
}

const setLocalStorage = (dbClient) => {
  const data =
    localStorage.setItem('db_clients', JSON.stringify(dbClient)) || []

  return data
}

export { getLocalStorage, setLocalStorage }
