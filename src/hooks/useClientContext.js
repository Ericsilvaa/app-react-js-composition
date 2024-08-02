import React from 'react'
import { ClientContext } from '../contexts/client/ClientsContext'

export const useClientContext = () => {
  const context = React.useContext(ClientContext)

  if (!context) {
    alert('Tu ta mexendo onde não deve, meu fi!')
  }
  return context
}
