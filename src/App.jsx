import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import MainContent from './components/MainContent.jsx'

const App = () => {
  
  return (
    <div className='container p-5 md:p-14 md:w-screen md:max-w-[70rem]'>
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

export default App
