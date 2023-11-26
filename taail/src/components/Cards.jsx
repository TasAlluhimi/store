import React from 'react'

function Cards(props) {
  return (
    <div>

        <div className='flex border w-[22rem]'>
        <div className=' w-[500px]'>
            <img src={props.src}/>
            </div>

            <div className=''>
                <h5 className='font-bold mb-5'>{props.title}</h5>
                <p>{props.des}</p>

            </div>
                
        </div>
    </div>
  )
}

export default Cards