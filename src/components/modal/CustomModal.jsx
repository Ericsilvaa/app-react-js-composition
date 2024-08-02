import { useClientContext } from '../../hooks/useClientContext'
import FormContainer from '../form/Form'
import ModalHeader from './ModalHeader'
import './modal.css'

// eslint-disable-next-line react-refresh/only-export-components
const CustomModal = () => {
  const { modal } = useClientContext()

  return (
    <>
      {modal && (
        <div className='modal-overlay'>
          <div className='modal-content'>
            <ModalHeader />
            <FormContainer />
          </div>
        </div>
      )}
    </>
  )
}

export default CustomModal
