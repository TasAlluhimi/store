import React from 'react'
import img from '../assets/g1izwwdb.png'

function Ad() {
  return (
    <div>
        <div className='mt-10 flex justify-center p-10 gap-10'>
        <div className='flex border'>
            <div className='p-10 bg-[rgb(248,248,248)]'>
            <p className='font-bold text-xl'>Bose Bluetooth<br/>Wireless Headphones</p>
            <p className='mt-5'>Lorem ipsum sumenda ducimus sint similique <br></br> dolores iste facilis perferendis inventore laborum?</p>
            </div>

            <div className='p-10 bg-[rgb(248,248,248)]'>
            <p className='mt-5 line-through'>$260.50</p>
            <p className='text-xl text-lime-600'>$219.05</p>
            <button className='bg-[rgb(252,183,0)] p-2 mt-5'>SHOP NOW</button>
            </div>

            <img className='h-auto' src={img} alt="" />
        </div>
        </div>
    </div>
  )
}

export default Ad