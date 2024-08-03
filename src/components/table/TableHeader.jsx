import PropTypes from 'prop-types'
import { columnsTable } from '../../constants/data-table'
import './records.css'
import { TableRowItem } from './TableRowItem'

const TableHeaderItem = ({ column }) => {
  return (
    <th className='th-header'>
      <span>{column}</span>
    </th>
  )
}

const TableHeader = () => {
  return (
    <thead className='table-header'>
      <TableRowItem classNames='tr-records'>
        {columnsTable.map((column, index) => (
          <TableHeaderItem key={index} column={column} />
        ))}
      </TableRowItem>
    </thead>
  )
}

TableHeaderItem.propTypes = {
  column: PropTypes.string
}

export default TableHeader
