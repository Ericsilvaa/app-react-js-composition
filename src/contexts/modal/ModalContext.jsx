/* eslint-disable react/prop-types */
import { createContext, useState } from 'react'
import { useClientContext } from '../../hooks/useClientContext'

export const ModalContext = createContext()

export const ModalProvider = ({ children }) => {
  const [modalVisible, setIsModalVisible] = useState(false) // boolean
  const { clearClientEdit } = useClientContext() // null or Client ID

  const openModal = () => {
    setIsModalVisible(true)
  }

  const closeModal = () => {
    clearClientEdit()
    setIsModalVisible(false)
  }

  return (
    <ModalContext.Provider
      value={{
        modalVisible,
        openModal,
        closeModal
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}
