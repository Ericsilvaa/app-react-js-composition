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
  const [modal, setModal] = useState(false) // boolean
  const [isClientEdit, setIsClientEdit] = useState(null) // null or Client ID
  const [items, setItems] = useState([]) // array

  useEffect(() => {
    const savedItems = readClient()
    setItems(savedItems)
  }, [])

  const readItems = () => {
    const savedItems = readClient()
    setItems(savedItems)
  }

  const createItem = (item) => {
    const newItem = { id: Date.now(), ...item }
    createClient(newItem)
    setItems([...items, newItem])

    return {
      id: newItem.id,
      success: true
    }
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

  const updateItem = (id, updatedItem) => {
    const index = items.findIndex((item) => item.id === id)
    if (index !== -1) {
      const updatedItems = [...items]
      updatedItems[index] = { ...updatedItems[index], ...updatedItem }
      updateClient(index, updatedItems[index])
      setItems(updatedItems)

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

  const getById = (id) => {
    const client = items.find((item) => item.id === id)

    setModal(true)
    setIsClientEdit(client)
  }

  const openModal = () => {
    setModal(true)
  }

  const closeModal = () => {
    setIsClientEdit(null)
    setModal(false)

    setModal(false)
  }

  return (
    <ClientContext.Provider
      value={{
        items,
        createItem,
        readItems,
        updateItem,
        deleteItem,
        modal,
        openModal,
        closeModal,
        getById,
        isClientEdit
      }}
    >
      {children}
    </ClientContext.Provider>
  )
}
