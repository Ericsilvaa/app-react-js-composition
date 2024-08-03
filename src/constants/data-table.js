const columnsTable = ['Nome', 'E-mail', 'Celular', 'Cidade', 'Ação']

const actionsTable = [
  {
    id: 'editar',
    label: 'Editar',
    color: 'blue'
  },
  {
    id: 'excluir',
    label: 'Excluir',
    color: 'red'
  }
]

const actionsModalTable = [
  { id: 'salvar', color: 'blue', label: 'Salvar', type: 'submit' },
  {
    id: 'cancelar',
    color: 'red',
    label: 'Cancelar'
  }
]

export { actionsModalTable, actionsTable, columnsTable }
