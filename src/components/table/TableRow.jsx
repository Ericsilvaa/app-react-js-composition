import PropTypes from 'prop-types'
import BodyActions from '../button/ButtonActions'

const TableRow = ({ row }) => {
  return (
    <>
      {Object.entries(row).map(([key, value], cellIndex) => {
        if (key === 'id') return null
        if (key !== 'actions') {
          return <td key={cellIndex}>{value}</td>
        } else {
          return (
            <td key={cellIndex}>
              <BodyActions renderActions={value} clientId={row.id} />
            </td>
          )
        }
      })}
    </>
  )
}

TableRow.propTypes = {
  row: PropTypes.object.isRequired
}

export default TableRow
