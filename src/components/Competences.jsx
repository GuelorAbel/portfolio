import React from 'react'

function Competences() {
  return (
    <section className='bg-sky-500 py-20'>
       {/* TITRE DE LA SECTION  */}
       <h3 className='text-3xl uppercase text-center mb-1 font-bold text-gray-200'>mes compétences</h3>
       <div className='w-[100px] h-[4px] bg-gray-200 mx-auto rounded-full'></div>
       <div className="section text-gray-200 grid md:grid-cols-3 md:gap-3 pt-12">
          {/* BLOC SYSTEME & RESEAU */}
            <div className='px-3'>
               <h6 className="text-xl pb-4 underline underline-offset-4 underline-gray-200 text-bold text-center">
                  Maintenance informatique
               </h6>
                  {/* MAINTENANCE INFORMATIQUE*/}
               <div className='pb-4'>
                  <span>Maintenance (préventive, corrective, évolutive) </span>
                  <div className="w-full bg-gray-200 rounded-full">
                     <div className="bg-sky-700 text-xs font-medium text-gray-200 text-center p-0.5 leading-none rounded-full w-[80%]"> 80%</div>
                  </div>
               </div>
               {/* GESTION PARC INFORMATIQUE */}
               <div className='pb-4'>
                  <span className="">Gestion du parc informatique</span>
                  <div className="w-full bg-gray-200 rounded-full">
                     <div className="bg-sky-700 text-xs font-medium text-gray-200 text-center p-0.5 leading-none rounded-full w-[70%]"> 70%</div>
                  </div>
               </div>  
               {/* GESTION DU RESEAU */}
               <div className='pb-4'>
                  <span className="">Administration du réseau</span>
                  <div className="w-full bg-gray-200 rounded-full">
                     <div className="bg-sky-700 text-xs font-medium text-gray-200 text-center p-0.5 leading-none rounded-full w-[55%]"> 55%</div>
                  </div>
               </div>
               {/* GESTION DES SERVEURS DNS */}
               <div className='pb-4'>
                  <span className="">Gestion et administration Serveur (Wondows 2012R2, 2016, 2019, 2022) </span>
                  <div className="w-full bg-gray-200 rounded-full">
                     <div className="bg-sky-700 text-xs font-medium text-gray-200 text-center p-0.5 leading-none rounded-full w-[55%]"> 55%</div>
                  </div>
               </div>  

            </div>

         {/* BLOC DEVELOPPEMENT WEB */}
            <div className='px-3'>
            <h6 className="text-xl pb-4 underline underline-offset-4 underline-gray-200 text-bold text-center">
               Développement web
            </h6>
               {/* CREATION DE SITES ET APPLICATION WEB */}
            <div className='pb-4'>
               <span className="">Création de site & application web</span>
               <div className="w-full bg-gray-200 rounded-full">
                  <div className="bg-sky-700 text-xs font-medium text-gray-200 text-center p-0.5 leading-none rounded-full w-[70%]"> 70%</div>
               </div>
            </div>
            {/* REACT JS */}
            <div className='pb-4'>
               <span className="">Refonte de site web existant</span>
               <div className="w-full bg-gray-200 rounded-full">
                  <div className="bg-sky-700 text-xs font-medium text-gray-200 text-center p-0.5 leading-none rounded-full w-[70%]"> 70%</div>
               </div>
            </div>  
            {/* PHP ET MYSQL */}
            <div className='pb-4'>
               <span className="">Création de site e-commerce & blog</span>
               <div className="w-full bg-gray-200 rounded-full">
                  <div className="bg-sky-700 text-xs font-medium text-gray-200 text-center p-0.5 leading-none rounded-full w-[60%]"> 60%</div>
               </div>
            </div>
            {/* HTML CSS ET JAVASCRIPT */}
            <div className='pb-4'>
               <span className="">Intégration web</span>
               <div className="w-full bg-gray-200 rounded-full">
                  <div className="bg-sky-700 text-xs font-medium text-gray-200 text-center p-0.5 leading-none rounded-full w-[70%]"> 70%</div>
               </div>
            </div>  

            </div>

         {/* BLOC DESIGN & INFOGRAPHIE */}
            <div></div>

       </div>
      </section>
  )
}

export default Competences;