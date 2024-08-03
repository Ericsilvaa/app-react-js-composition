import PropTypes from 'prop-types'
import './records.css'

export const TableRowItem = ({ children, classNames }) => {
  const defaultClass = classNames ? classNames : ''

  return <tr className={defaultClass}>{children}</tr>
}

TableRowItem.propTypes = {
  children: PropTypes.element.isRequired,
  classNames: PropTypes.string
}
