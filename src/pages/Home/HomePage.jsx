import MainContainer from '../../components/container/MainContainer'
import Footer from '../../components/footer/Footer'
import HeaderBase from '../../components/header/Header'
import CustomModal from '../../components/modal/CustomModal'
import './HomePage.css'

const HomePage = () => {
  return (
    <>
      <div className='homepage-container'>
        <HeaderBase />
        <MainContainer />
        <Footer />
      </div>
      <CustomModal />
    </>
  )
}

export default HomePage
