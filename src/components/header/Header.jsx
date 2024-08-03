import { useModalContext } from '../../hooks/useModalContext'
import CustomButton from '../button/button'
import './Header.css'

const HeaderBase = () => {
  const { openModal } = useModalContext()

  return (
    <header className='header-container'>
      <h3 className='header-title'>Cadastro de Clientes</h3>

      <CustomButton onClick={openModal}>
        <span>Cadastrar Clientes</span>
      </CustomButton>
    </header>
  )
}

export default HeaderBase
