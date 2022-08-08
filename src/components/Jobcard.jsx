import React from 'react'

function Jobcard({titre, src, url}) {
  return (
      // LE COMPOSANT CARD (REPRESENTATION DU TRAVAIL DEJA EFFECTUE)
      <div>
         <a href={url} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
         <div>
            <img src={src} alt="Site web de www.abel.com développé par Abel" />
         </div>
         <div>
               <h5 className="subsub text-center text-sky-500 font-semibold py-3">{titre}</h5>
               
            <div className="w-[80%] mx-[35%] py-6">
               <a href={url} target="_blank" rel="noopener noreferrer" className='btn-sky'>
                  Visiter le site
               </a>
            </div>
         </div>
         </a>
      </div>
  )
}

export default Jobcard;