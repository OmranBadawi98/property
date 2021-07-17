import React from 'react'

function Navbar() {
  return (
    <div className='flex relative pt-24'>
      <div className='flex '>Logo</div>
      <div className='pl-12 ml-auto h-full space-x-4 space-x-reverse text-white'>
        <button className='border-2 border-yellow-300 text-yellow-300 w-24 h-12  hover:bg-yellow-300 hover:text-black text-lg font-bold'>
          الرئيسية
        </button>
        <button className='w-24 h-12 hover:bg-yellow-300 hover:text-black text-lg font-bold '>
          مشاريعنا
        </button>
        <button className='w-24 h-12 hover:bg-yellow-300 hover:text-black text-lg font-bold'>
          الأراضي
        </button>
        <button className='w-36 h-12 hover:bg-yellow-300 hover:text-black text-lg font-bold'>
          فرص أستثمارية
        </button>
        <button className='w-36 h-12 hover:bg-yellow-300 hover:text-black text-lg font-bold'>
          الأستثمار والتملك
        </button>
        <button className='w-36 h-12 hover:bg-yellow-300 hover:text-black text-lg font-bold'>
          المعالم والمناطق
        </button>
        <button className='w-36 h-12 hover:bg-yellow-300 hover:text-black text-lg font-bold'>
          الأخبار والمقالات
        </button>
        <button className='w-16 h-12 hover:bg-yellow-300 hover:text-black text-lg font-bold'>
          عنا
        </button>
      </div>
    </div>
  )
}

export default Navbar
