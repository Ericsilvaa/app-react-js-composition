import { columnsTable } from '../../constants/data-table'
import './records.css'

const TableHeader = () => {
  return (
    <thead className='table-header'>
      <tr className='tr-records'>
        {columnsTable.map((column, index) => (
          <th className='th-header' key={index}>
            <span>{column}</span>
          </th>
        ))}
      </tr>
    </thead>
  )
}

export default TableHeader
