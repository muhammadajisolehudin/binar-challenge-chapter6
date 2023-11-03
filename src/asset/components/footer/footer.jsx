import React, { useState } from 'react'

export const Footer = () => {
    const [PageNow, setPageNow] = useState(1);
  return (
    <div className='flex justify-between mt-8'>
              
        <button className='text-white w-[8rem] h-[2.5rem] rounded-full font-semibold bg-red-500' onClick={()=>{setPageNow(PageNow - 1)
        }}>Back Page</button>

        <h1 className="font-bold text-2xl text-white">{PageNow}</h1>

        <button className="text-white w-[8rem] h-[2.5rem] rounded-full font-semibold bg-red-500" onClick={() => {setPageNow(PageNow + 1);
        }}>Next</button>
    </div>
  )
}
