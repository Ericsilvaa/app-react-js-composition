import PropTypes from 'prop-types'
import { ClientProvider } from '../contexts/client/ClientsContext'
import { ModalProvider } from '../contexts/modal/ModalContext'

export const Providers = ({ children }) => {
  return (
    <ClientProvider>
      <ModalProvider>{children}</ModalProvider>
    </ClientProvider>
  )
}

Providers.propTypes = {
  children: PropTypes.node.isRequired
}
