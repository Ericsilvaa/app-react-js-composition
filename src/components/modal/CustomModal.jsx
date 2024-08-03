import { useModalContext } from '../../hooks/useModalContext'
import FormContainer from '../form/Form'
import ModalHeader from './ModalHeader'
import './modal.css'

const CustomModal = () => {
  const { modalVisible } = useModalContext()

  return (
    <>
      {modalVisible && (
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
