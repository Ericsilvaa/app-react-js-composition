import PropTypes from 'prop-types'
import './records.css'

const TableHeader = ({ columns }) => {
  return (
    <thead className='table-header'>
      <tr className='tr-records'>
        {columns.map((column, index) => (
          <th className='th-header' key={index}>
            <span>{column}</span>
          </th>
        ))}
      </tr>
    </thead>
  )
}

TableHeader.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default TableHeader
