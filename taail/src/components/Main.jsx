import React from 'react'

function Main() {
  return (
    <div className='flex justify-center p-10 gap-10'>
        <div className='flex'>
            <div className='p-10 bg-gray-100'>
            <p>WOODEN<br/>MINIMALISTIC<br/>CHAIRS</p>
            <p className='mt-5'>SALES UP TO</p>
            <p>40% Off</p>
            <button className='bg-[rgb(252,183,0)] p-2 mt-5'>SHOP NOW</button>
            </div>
            <img className='h-80 w-96 border' src="https://furniture-kabukithemes.myshopify.com/cdn/shop/products/12_copy.jpg?v=1450255351" alt="" />
        </div>
        
        {/* <div className="bg-[url('https://smartguys.com.au/media/wysiwyg/magebig/layout05/b5.jpg')] w-80 object-cover">
            hi
        </div> */}

        <img className='h-80 border' src="https://nouthemes.net/html/martfury/img/slider/home-4/left.jpg" alt="" />
    </div>
  )
}

export default Main