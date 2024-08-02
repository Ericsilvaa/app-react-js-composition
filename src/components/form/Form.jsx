import ButtonModalActions from '../button/ButtonModalActions'
import InputForm from '../input/InputForm'
import './Form.css'

const FormContainer = () => {
  return (
    <>
      <form id='form' className='modal-form'>
        <InputForm
          label='Nome'
          type='text'
          placeholder='Nome do Cliente'
          required
        />

        <InputForm
          label='E-mail'
          type='email'
          className='modal-input'
          placeholder='e-mail do Cliente'
          required
        />

        <InputForm
          label='Celular'
          type='text'
          placeholder='Celular do Cliente'
          required
        />

        <InputForm
          label='Cidade'
          type='text'
          placeholder='Cidade do Cliente'
          required
        />
      </form>

      <ButtonModalActions />
    </>
  )
}

export default FormContainer
