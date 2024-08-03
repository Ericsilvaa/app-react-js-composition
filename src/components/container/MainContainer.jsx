import TableBody from '../table/TableBody'
import TableComponent from '../table/TableComponent'
import TableHeader from '../table/TableHeader'
import './MainContainer.css'

const MainContainer = () => {
  return (
    <div className='main-container'>
      <TableComponent header={<TableHeader />} body={<TableBody />} />
    </div>
  )
}

export default MainContainer
