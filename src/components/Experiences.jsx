import React from 'react';
import Exp from '../datas';
import Acquis from './Acquis';

function Experiences() {
  return (
    <section className='bg-back-gris bg-center bg-cover bg-no-repeat bg-fixed w-full py-14'>

       <div className="section font-abel">
       <h3 className='text-3xl uppercase text-center mb-1 font-bold text-gray-700'>Mon expérience</h3>
         <div className='w-[100px] h-[4px] bg-sky-500 mx-auto rounded-full'></div>
       </div>

       {/* Box qui présente mon expérience sous forme de carte */}
       <div className='section font-abel grid md:grid-cols-3 gap-8 my-6 md:my-4'>
        {/* Box 1 */}
          {
            Exp.map((item, id) =>
            <Acquis  
              job={item.job} 
              poste={item.poste} 
              dateD={item.dateD} 
              dateF={item.dateF} 
              desc={item.desc} 
              key={id}  
            />
          )
          }


       </div>
    </section>
  )
}

export default Experiences;