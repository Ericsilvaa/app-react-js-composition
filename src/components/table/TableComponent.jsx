import './records.css'
import TableBody from './TableBody'
import TableHeader from './TableHeader'

const TableComponent = () => {
  return (
    <table id='tableClient' className='records-container'>
      <TableHeader />
      <TableBody />
    </table>
  )
}

export default TableComponent
