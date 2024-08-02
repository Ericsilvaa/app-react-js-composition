import { useEffect, useState } from 'react'
import { useClientContext } from '../../hooks/useClientContext'
import { clearFields, validFields } from '../../utils/valid-fields'
import ButtonModalActions from '../button/ButtonModalActions'
import InputForm from '../input/InputForm'
import './Form.css'

const FormContainer = () => {
  const { createItem, closeModal, isClientEdit, updateItem } =
    useClientContext()

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    celular: '',
    cidade: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const resetFields = (error) => {
    if (error) alert(error)
    closeModal()
    setFormData(clearFields())
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validFields(formData)) {
      if (isClientEdit) {
        const updated = updateItem(isClientEdit.id, formData)
        if (!updated.success) return resetFields('Erro ao atualizar cliente.')

        resetFields()

        return
      }

      const created = createItem(formData)
      if (!created.success) return resetFields('Erro ao criar cliente.')

      resetFields()
    }
  }

  useEffect(() => {
    setFormData({
      nome: isClientEdit ? isClientEdit.nome : '',
      email: isClientEdit ? isClientEdit.email : '',
      celular: isClientEdit ? isClientEdit.celular : '',
      cidade: isClientEdit ? isClientEdit.cidade : ''
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <form id='form' className='modal-form' onSubmit={handleSubmit}>
      <InputForm
        label='Nome'
        type='text'
        name='nome'
        placeholder='Nome do Cliente'
        value={formData.nome}
        onChange={handleChange}
        required
      />
      <InputForm
        label='E-mail'
        type='email'
        name='email'
        className='modal-input'
        placeholder='e-mail do Cliente'
        value={formData.email}
        onChange={handleChange}
        required
      />
      <InputForm
        label='Celular'
        type='text'
        name='celular'
        placeholder='Celular do Cliente'
        value={formData.celular}
        onChange={handleChange}
        required
      />
      <InputForm
        label='Cidade'
        type='text'
        name='cidade'
        placeholder='Cidade do Cliente'
        value={formData.cidade}
        onChange={handleChange}
        required
      />

      <ButtonModalActions />
    </form>
  )
}

export default FormContainer
