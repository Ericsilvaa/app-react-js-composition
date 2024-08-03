import { actionsTable } from '../../constants/data-table'
import { useClientContext } from '../../hooks/useClientContext'
import InfoActions from '../button/ButtonActions'
import './records.css'
import TableEmpty from './TableEmpty'
import TableInfo from './TableInfo'
import { TableRowItem } from './TableRowItem'

const TableBody = () => {
  const { items } = useClientContext()

  if (!items.length) return <TableEmpty />

  return (
    <tbody className='table-container'>
      {items.map((row, rowIndex) => (
        <TableRowItem key={rowIndex}>
          <TableInfo
            infos={
              <>
                <span>{row.nome}</span>
                <span>{row.email}</span>
                <span>{row.celular}</span>
                <span>{row.cidade}</span>
              </>
            }
            action={
              <InfoActions renderActions={actionsTable} clientId={row.id} />
            }
          />
        </TableRowItem>
      ))}
    </tbody>
  )
}

export default TableBody
