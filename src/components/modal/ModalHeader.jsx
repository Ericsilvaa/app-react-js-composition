import { useClientContext } from '../../hooks/useClientContext'
import { useModalContext } from '../../hooks/useModalContext'
import './modal.css'

const ModalHeader = () => {
  const { isClientEdit } = useClientContext()
  const { closeModal } = useModalContext()

  return (
    <header className='modal-header'>
      <h2>{isClientEdit ? 'Editar Cliente' : 'Novo Cliente'}</h2>
      <button
        type='button'
        className='modal-close'
        id='modalClose'
        onClick={closeModal}
      >
        &#10006;
      </button>
    </header>
  )
}

export default ModalHeader
