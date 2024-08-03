import React from 'react'
import { ModalContext } from '../contexts/modal/ModalContext'

export const useModalContext = () => {
  const context = React.useContext(ModalContext)

  if (!context) {
    alert('Tu ta mexendo onde não deve, meu fi!')
  }
  return context
}
