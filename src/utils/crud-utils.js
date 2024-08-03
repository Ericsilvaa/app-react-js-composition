import { getLocalStorage, setLocalStorage } from './localstorage-utils'

const readClient = () => getLocalStorage()

const deleteClientById = (id) => {
  const dbClient = getLocalStorage()
  const updatedDbClient = dbClient.filter((client) => client.id !== id)
  setLocalStorage(updatedDbClient)
  return updatedDbClient
}

const updateClient = (index, clients, updatedItem) => {
  const updatedItems = [...clients]
  updatedItems[index] = { ...updatedItems[index], ...updatedItem }

  const dbClient = getLocalStorage()
  dbClient[index] = updatedItems[index]
  setLocalStorage(dbClient)

  return updatedItems
}

const createClient = (items, client) => {
  const newClient = { id: Date.now(), ...client }

  const dbClient = getLocalStorage()
  dbClient.push(newClient)
  setLocalStorage(dbClient)

  return {
    data: [...items, newClient],
    success: true,
    id: newClient.id
  }
}

export { createClient, deleteClientById, readClient, updateClient }
