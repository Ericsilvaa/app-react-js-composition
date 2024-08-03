import PropTypes from 'prop-types'
import { TableAction } from '../table/TableAction'
import './button.css'

const InfoActions = ({ actions, onClick, clientId }) => {
  return (
    <div className='button-actions-container'>
      {actions.map((btn) => {
        const dataValue = { ...btn, onClick, clientId }

        return <TableAction key={btn.id} data={dataValue} />
      })}
    </div>
  )
}

InfoActions.propTypes = {
  actions: PropTypes.array,
  onClick: PropTypes.func,
  clientId: PropTypes.number
}

export default InfoActions
