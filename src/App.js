import Header from './components/header/Header'
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'
import './index.css'

function App() {
  return (
    <>
      <div className='w-full'>
        <Home />
        <div className='absolute w-full '>
          <Header />
          <Navbar />
        </div>
      </div>
    </>
  )
}

export default App
