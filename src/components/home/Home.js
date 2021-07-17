import React from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import {
  FaFacebookF,
  FaLinkedinIn,
  FaSnapchatGhost,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa'
import Homes from '../../images/homes.jpeg'

function Home() {
  return (
    <>
      <div className='absolute w-full h-auto bg-yellow-300'>
        <img src={Homes} alt='home' className='w-full relative ' />

        <div className='absolute bottom-0 pr-12 pb-8 '>
          <div className='pr-12 ml-auto h-full space-x-5 space-x-reverse flex'>
            <div className='flex items-center'>
              <button className='border-2 bg-gray-300 rounded-full h-12 w-12'>
                <FaSnapchatGhost className='w-7 h-7 text-red-600 m-auto' />
              </button>
              <div className='pr-2 text-xl'>أضف عقارك</div>
            </div>

            <div className='flex items-center'>
              <button className='border-2 bg-gray-300 rounded-full h-12 w-12'>
                <FaSnapchatGhost className='w-7 h-7 text-red-600 m-auto' />
              </button>
              <div className='pr-2 text-xl'>دعنا نتصل بك</div>
            </div>
            <div className='flex items-center'>
              <button className='border-2 bg-gray-300 rounded-full h-12 w-12'>
                <FaSnapchatGhost className='w-7 h-7 text-red-600 m-auto' />
              </button>
              <div className='pr-2 text-xl'>كن وكيلنا</div>
            </div>
            <div className='flex items-center'>
              <button className='border-2 bg-gray-300 rounded-full h-12 w-12'>
                <FaSnapchatGhost className='w-7 h-7 text-red-600 m-auto' />
              </button>
              <div className='pr-2 text-xl'>النشرة البريدية</div>
            </div>
          </div>
          <div>
            <button className='mr-auto'>button1</button>
            <button className='mr-auto'>button1</button>
          </div>
        </div>
      </div>
      {/* <div className=''>
        <button>1</button>
        <button>1</button>
        <button>1</button>
        <button>1</button>
      </div> */}
    </>
  )
}

export default Home
