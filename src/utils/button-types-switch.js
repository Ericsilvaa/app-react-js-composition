const handleClick = ({ clientId, id, onClick }) => {
  switch (id) {
    case 'editar':
      onClick({
        clientId,
        id
      })
      break
    case 'cancelar':
      onClick()
      break
    case 'excluir':
      onClick({
        clientId,
        id
      })
      break
    default:
      return
  }
}

export { handleClick }
