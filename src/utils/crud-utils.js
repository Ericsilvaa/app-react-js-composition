import { getLocalStorage, setLocalStorage } from './LocalStorage'

const deleteClientById = (id) => {
  const dbClient = getLocalStorage()
  const updatedDbClient = dbClient.filter((client) => client.id !== id)
  setLocalStorage(updatedDbClient)
  return updatedDbClient
}

const updateClient = (index, client) => {
  const dbClient = getLocalStorage()
  dbClient[index] = client
  setLocalStorage(dbClient)
}

const readClient = () => getLocalStorage()

const createClient = (client) => {
  const dbClient = getLocalStorage()
  dbClient.push(client)
  setLocalStorage(dbClient)
}

export { createClient, deleteClientById, readClient, updateClient }
