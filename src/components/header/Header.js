import React from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import {
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaSnapchatGhost,
  FaFacebookF,
} from 'react-icons/fa'
import { RiWhatsappFill } from 'react-icons/ri'

// const [Fixe,setFixe] = () => {

// }

function Header() {
  return (
    <header className='pt-4 pb-4 h-20 w-full bg-blue-800 bg-opacity-30 flex fixed'>
      <div className='pr-12 ml-auto h-full space-x-4 space-x-reverse'>
        <button className='border-2 bg-gray-300 rounded-full h-12 w-12'>
          <FaSnapchatGhost className='w-7 h-7 text-red-600 m-auto' />
        </button>
        <button className='border-2 bg-gray-300 rounded-full h-12 w-12'>
          <FaLinkedinIn className='w-7 h-7 text-red-600 m-auto' />
        </button>
        <button className='border-2 bg-gray-300 rounded-full h-12 w-12'>
          <FaYoutube className='w-7 h-7 text-red-600 m-auto' />
        </button>
        <button className='border-2 bg-gray-300 rounded-full h-12 w-12'>
          <FaTwitter className='w-7 h-7 text-red-600 m-auto' />
        </button>
        <button className='border-2 bg-gray-300 rounded-full h-12 w-12'>
          <AiFillInstagram className='w-7 h-7 text-red-600 m-auto' />
        </button>
        <button className='border-2 bg-gray-300 rounded-full h-12 w-12'>
          <FaFacebookF className='w-7 h-7 text-red-600 m-auto' />
        </button>
      </div>
      <div className='pl-12 mr-auto h-full space-x-4 space-x-reverse text-white'>
        <button className='border-2 bg-white text-black rounded-md w-40 h-full '>
          <div className='ml-0'>
            <RiWhatsappFill />
          </div>
          <h1 className='mr-auto '>+9639931856873</h1>
        </button>
        <button className='border-2 border-white rounded-md w-36 h-full'>
          المستشار العقاري
        </button>
        <button className='border-2 border-white rounded-md w-32 h-full'>
          أختر العملة
        </button>
        <button className='border-2 border-white rounded-md w-16 h-full'>
          Ar
        </button>
      </div>
    </header>
  )
}

export default Header
