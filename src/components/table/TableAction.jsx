import PropTypes from 'prop-types'
import { handleClick } from '../../utils/button-types-switch'
import CustomButton from '../button/button'

export const TableAction = ({ data }) => {
  return (
    <CustomButton
      type={data.type || 'button'}
      id={data.id}
      classNames={`button ${data.color}`}
      onClick={() => handleClick(data)}
    >
      {data.label}
    </CustomButton>
  )
}

TableAction.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string,
    color: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    label: PropTypes.string.isRequired,
    clientId: PropTypes.number
  }).isRequired
}
