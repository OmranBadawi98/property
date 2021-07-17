import Header from './components/header/Header'
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'
import './index.css'

function App() {
  return (
    <>
      <div className=''>
        <div className='absolute w-full'>
          <Home />
          <Navbar />
        </div>
        <div className='absolute w-full '>
          <Header />
        </div>
      </div>
    </>
  )
}

export default App
