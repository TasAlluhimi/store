import React from 'react'

function NavBar() {
  return (
    <div className='bg-[rgb(252,183,0)] flex items-center h-10 justify-center font-bold'>
        <div>
            <ul className='flex gap-10'>
                <li>ALL CATEGORIES</li>
                <li className='text-[rgb(172,117,0)]'>TODAY DEALS</li>
                <li>ELECTRONICS</li>
                <li>CLOTHINGS</li>
                <li>COMUTERS</li>
                <li>FURNITURES</li>
                <li>MOM & BABY</li>
                <li>BOOKS & MORE</li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar