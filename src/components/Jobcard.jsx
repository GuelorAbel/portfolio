import React from 'react'

function Jobcard({titre, src, desc, url}) {
  return (
      <div>
         <a href={url} target="_blank" rel="noreferrer" className="cursor-pointer">
         <div>
            <img src={src} alt="Site web de www.abel.com développé par Abel" />
         </div>
         <div>
               <h5 className="subsub text-center text-sky-500 font-semibold py-3">{titre}</h5>
               <p className="para text-center">
                  {desc}
               </p>
            <div className="mx-[36%] md:mx-[35%] py-6">
               <a href={url} target="_blank" rel="noreferrer" className='btn-sky'>
                  Visiter le site
               </a>
            </div>
         </div>
         </a>
      </div>
  )
}

export default Jobcard;