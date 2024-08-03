/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react'
import {
  createClient,
  deleteClientById,
  readClient,
  updateClient
} from '../../utils/crud-utils'

export const ClientContext = createContext()

export const ClientProvider = ({ children }) => {
  const [isClientEdit, setIsClientEdit] = useState(null)
  const [items, setItems] = useState([])

  const getById = (id) => {
    const client = items.find((item) => item.id === id)

    setIsClientEdit(client)
  }

  const readItems = () => {
    const savedItems = readClient()
    setItems(savedItems)
  }

  const createItem = (item) => {
    const { data, id } = createClient(items, item)

    setItems(data)

    return {
      id,
      data,
      success: true
    }
  }

  const updateItem = (id, updatedItem) => {
    const index = items.findIndex((item) => item.id === id)
    if (index !== -1) {
      setItems(updateClient(index, items, updatedItem))

      return {
        id,
        success: true
      }
    }

    return {
      id,
      success: false
    }
  }

  const deleteItem = (id) => {
    deleteClientById(id)
    readItems()
  }

  const clearClientEdit = () => {
    setIsClientEdit(null)
  }

  useEffect(() => {
    const savedItems = readClient()
    setItems(savedItems)
  }, [])

  const value = {
    items,
    createItem,
    readItems,
    updateItem,
    deleteItem,
    getById,
    isClientEdit,
    clearClientEdit
  }

  return (
    <ClientContext.Provider {...{ value }}>{children}</ClientContext.Provider>
  )
}

// const updateItem = (id, updatedItem) => {
//   const index = items.findIndex((item) => item.id === id)
//   if (index !== -1) {
//     const updatedItems = [...items]
//     updatedItems[index] = { ...updatedItems[index], ...updatedItem }
//     updateClient(index, updatedItems[index])
//     setItems(updatedItems)

//     return {
//       id,
//       success: true
//     }
//   }

//   return {
//     id,
//     success: false
//   }
// }
