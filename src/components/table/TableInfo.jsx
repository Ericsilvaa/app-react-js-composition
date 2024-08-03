import PropTypes from 'prop-types'
import './records.css'

const TableInfo = ({ infos, action }) => {
  return (
    <td className='tr-records'>
      {infos && infos}
      {action && action}
    </td>
  )
}

TableInfo.propTypes = {
  infos: PropTypes.element,
  action: PropTypes.element
}

export default TableInfo
