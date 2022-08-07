import React from 'react';

function Footer() {
  return (
    <>
      {/* BLOC DE CODE DU PIED DE PAGE */}
      <section className="section">
         <div className='grid md:grid-cols-3 gap-4'>
            <div className='md:col-span-2 border-2 '>
               <h4>A props de moi</h4>
            </div>
            <div className='md:col-span-1'>
               <h4>Liens utilies</h4>
            </div>
         </div>
         

      </section>
    </>
  )
}

export default Footer;