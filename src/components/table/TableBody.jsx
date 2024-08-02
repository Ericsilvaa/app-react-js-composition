import PropTypes from 'prop-types'
import BodyActions from '../button/ButtonActions'
import './records.css'

const TableBody = ({ data }) => {
  return (
    <tbody className='table-container'>
      {data.map((row, rowIndex) => {
        return (
          <tr className='tr-records' key={rowIndex}>
            {Object.entries(row).map(([key, value], cellIndex) => {
              if (key !== 'ações') {
                return <td key={cellIndex}>{value}</td>
              } else {
                return (
                  <td key={cellIndex}>
                    <BodyActions renderButtons={value} clientId={row.id} />
                  </td>
                )
              }
            })}
          </tr>
        )
      })}
    </tbody>
  )
}

TableBody.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default TableBody
