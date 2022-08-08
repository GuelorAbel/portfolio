import React from 'react';

function Acquis( {job, poste, dateD, dateF, desc} ) {
  return (
   <div className='group relative my-14 md:my-11'>
   <div className='px-4 text-center group-hover:opacity-0 duration-500 py-4'>
     <h5 className='text-2xl font-bold'> { job }</h5>
     <h6 className='text-xl pt-2'> {poste} </h6>
     <p className='text-sm text-sky-500'><em>{dateD} - {dateF}</em></p>
   </div>
   <div className='experience w-full z-10 absolute top-0 left-0'>
       <span className='py-1 uppercase'>En tant que : {poste} </span>
       <p className='py-2'>
         {desc}
       </p>
   </div>
 </div>
  )
}

export default Acquis;