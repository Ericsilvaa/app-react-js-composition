import { useClientContext } from '../../hooks/useClientContext'
import CustomButton from './button'
import './button.css'

const ButtonModalActions = () => {
  const { createItem, closeModal } = useClientContext()

  return (
    <div className='button-actions-container'>
      <CustomButton id='salvar' classNames='button bege' onClick={createItem}>
        Salvar
      </CustomButton>
      <CustomButton id='cancelar' classNames='button blue' onClick={closeModal}>
        Cancelar
      </CustomButton>
    </div>
  )
}

export default ButtonModalActions
