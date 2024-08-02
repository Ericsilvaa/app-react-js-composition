import MainContainer from '../../components/container/MainContainer'
import Footer from '../../components/footer/Footer'
import HeaderBase from '../../components/header/Header'
import CustomModal from '../../components/modal/CustomModal'
import { ClientProvider } from '../../contexts/client/ClientsContext'
import './HomePage.css'

const HomePage = () => {
  return (
    <ClientProvider>
      <div className='homepage-container'>
        <HeaderBase />
        <MainContainer />
        <Footer />
      </div>
      <CustomModal />
    </ClientProvider>
  )
}

export default HomePage
