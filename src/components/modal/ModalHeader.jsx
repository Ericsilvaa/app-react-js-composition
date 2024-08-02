import { useClientContext } from '../../hooks/useClientContext'
import './modal.css'

const ModalHeader = () => {
  const { closeModal } = useClientContext()

  return (
    <header className='modal-header'>
      <h2>Novo Cliente</h2>
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
