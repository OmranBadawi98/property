import React from 'react'
import { AiFillInstagram, AiOutlineWhatsApp } from 'react-icons/ai'
import {
  FaFacebookF,
  FaLinkedinIn,
  FaSnapchatGhost,
  FaTwitter,
  FaYoutube,
  FaSearch,
  FaArrowUp,
  FaCircle,
} from 'react-icons/fa'
import Homes from '../../images/homes.jpeg'

function Home() {
  return (
    <>
      <div className='absolute w-full h-auto bg-yellow-300'>
        <img src={Homes} alt='home' className='w-full relative ' />
        <div className='absolute bottom-0 pr-12 pb-7'>
          <div className='ml-auto h-full space-x-5 space-x-reverse flex'>
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
        </div>
        <div className='items-center mr-auto absolute bottom-0 left-0 pl-12'>
          <button className='ml-4 h-16 bg-blue-500 w-36'>
            <FaSearch />
            أبحث
            <FaArrowUp />
          </button>
          <button className='mr-4 h-16 bg-blue-500 w-36'>
            <FaSearch />
            بحث متقدم
            <FaArrowUp />
          </button>
        </div>
        <div className='w-60 h-20 '>
          <AiOutlineWhatsApp>
            <FaCircle />
          </AiOutlineWhatsApp>
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
