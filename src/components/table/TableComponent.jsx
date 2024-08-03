import PropTypes from 'prop-types'
import './records.css'

const TableComponent = ({ header, body }) => {
  return (
    <table id='tableClient' className='records-container'>
      {header && header}
      {body && body}
    </table>
  )
}

TableComponent.propTypes = {
  header: PropTypes.element,
  body: PropTypes.element
}

export default TableComponent
