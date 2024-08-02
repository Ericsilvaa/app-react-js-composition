/* eslint-disable react/prop-types */
import { createContext, useState } from 'react'

export const ClientContext = createContext()

export const ClientProvider = ({ children }) => {
  const [modal, setModal] = useState(false) // boolean
  const [isClientEdit, setIsClientEdit] = useState(null) // null or Client ID
  const [items, setItems] = useState([]) // array

  const createItem = (item) => {
    console.log('creating')
    // const newItem = { id: Date.now(), ...item }
    // setItems([...items, newItem])
    // localStorage.setItem('items', JSON.stringify([...items, newItem]))
  }

  const readItems = () => {
    console.log('readItems')

    // const savedItems = localStorage.getItem('items')
    // return savedItems ? JSON.parse(savedItems) : items
  }

  const updateItem = (id, updatedItem) => {
    console.log(id, updatedItem, 'updating')
    // const updatedItems = items.map((item) =>
    //   item.id === id ? { id, ...updatedItem } : item
    // )
    // setItems(updatedItems)
    // localStorage.setItem('items', JSON.stringify(updatedItems))
  }

  const deleteItem = (id) => {
    console.log(id, 'deleting')
    // const updatedItems = items.filter((item) => item.id !== id)
    // setItems(updatedItems)
    // localStorage.setItem('items', JSON.stringify(updatedItems))
  }

  const openModal = (isClientEdit) => {
    if (isClientEdit) {
      setIsClientEdit(isClientEdit)
    }

    setModal(true)
  }

  const closeModal = () => {
    if (isClientEdit) {
      setIsClientEdit(null)
    }

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
        closeModal
      }}
    >
      {children}
    </ClientContext.Provider>
  )
}
