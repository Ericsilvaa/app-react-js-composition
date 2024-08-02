const validFields = (formData) => {
  const { nome, email, celular, cidade } = formData
  console.log('🚀 ~ validFields ~ formData:', formData)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  console.log('🚀 ~ validFields ~ PASSED')
  if (!nome || !email || !celular || !cidade) {
    alert('Todos os campos são obrigatórios.')
    return false
  }

  if (!emailRegex.test(email)) {
    alert('Por favor, insira um e-mail válido.')
    return false
  }
  console.log('🚀 ~ validFields ~ PASSED.test(email)')

  return true
}

const clearFields = () => ({
  nome: '',
  email: '',
  celular: '',
  cidade: ''
})

export { clearFields, validFields }
