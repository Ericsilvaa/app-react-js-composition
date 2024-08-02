import { actionsTable } from '../../constants/data-table'
import { useClientContext } from '../../hooks/useClientContext'
import './records.css'
import TableEmpty from './TableEmpty'
import TableRow from './TableRow'

const TableBody = () => {
  const { items } = useClientContext()

  const itemsEmpty = !items.length

  const dataItems = items.map((item) => ({
    id: item.id,
    nome: item.nome,
    email: item.email,
    celular: item.celular,
    cidade: item.cidade,
    actions: actionsTable
  }))

  return (
    <tbody className='table-container'>
      {itemsEmpty && <TableEmpty />}
      {!itemsEmpty &&
        dataItems.map((row, rowIndex) => (
          <tr className='tr-records' key={rowIndex}>
            <TableRow row={row} />
          </tr>
        ))}
    </tbody>
  )
}

export default TableBody
