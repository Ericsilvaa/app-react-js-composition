import { actionsTable } from '../../constants/data-table'
import { useClientContext } from '../../hooks/useClientContext'
import { useModalContext } from '../../hooks/useModalContext'
import InfoActions from '../button/ButtonActions'
import './records.css'
import TableEmpty from './TableEmpty'
import TableInfo from './TableInfo'
import { TableRowItem } from './TableRowItem'

const TableBody = () => {
  const { items, deleteItem, getById } = useClientContext()
  const { openModal } = useModalContext()

  const handleClick = (btn) => {
    const handleDeleteItem = () => {
      deleteItem(btn.clientId)
    }

    const handleOpenModal = () => {
      getById(btn.clientId)
      openModal()
    }

    return btn.id === 'editar' ? handleOpenModal() : handleDeleteItem()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }

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
              <InfoActions
                actions={actionsTable}
                onClick={handleClick}
                clientId={row.id}
              />
            }
          />
        </TableRowItem>
      ))}
    </tbody>
  )
}

export default TableBody
