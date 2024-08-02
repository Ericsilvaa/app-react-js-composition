/* eslint-disable react/prop-types */
import { createContext, useState } from 'react'
import { useClientContext } from '../../hooks/useClientContext'

export const ModalContext = createContext()

export const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState(false) // boolean
  const { isClientEdit, setIsClientEdit } = useClientContext() // null or Client ID

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
    <ModalContext.Provider
      value={{
        modal,
        openModal,
        closeModal
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}
