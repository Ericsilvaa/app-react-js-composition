import './records.css'
import TableBody from './TableBody'
import TableHeader from './TableHeader'

const columns = ['Nome', 'E-mail', 'Celular', 'Cidade', 'Ação']
const data = [
  {
    id: 1,
    nome: 'João',
    email: 'joao@example.com',
    celular: '123-456-7890',
    cidade: 'São Paulo',
    ações: [
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
  },
  {
    id: 2,
    nome: 'Maria',
    email: 'maria@example.com',
    celular: '123-456-7891',
    cidade: 'Rio de Janeiro',
    ações: [
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
  }
]

const TableComponent = () => {
  return (
    <table id='tableClient' className='records-container'>
      <TableHeader columns={columns} />
      <TableBody data={data} />
    </table>
  )
}

export default TableComponent
