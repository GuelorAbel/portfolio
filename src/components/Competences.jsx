import React from 'react'
import Cv from '../assets/cvAbel.pdf'

function Competences() {
  return (
    <section className='bg-back bg-cover bg-center bg-no-repeat w-full py-14 font-abel' name='competences'>
       {/* TITRE DE LA SECTION  */}
       <h3 className='text-3xl uppercase text-center mb-1 font-bold text-gray-200'>mes compétences</h3>
       <div className='w-[100px] h-[4px] bg-gray-200 mx-auto rounded-full'></div>
       <div className="section text-gray-200 grid md:grid-cols-3 md:gap-3 pt-12">

          {/* BLOC SYSTEME & RESEAU */}
            <div className='px-3 py-2'>
               <h6 className="text-xl pb-4 underline underline-offset-4 underline-gray-200 text-bold text-center">
                  Maintenance informatique
               </h6>
                  {/* MAINTENANCE INFORMATIQUE*/}
               <div className='pb-4'>
                  <span>Maintenance Hardware & Software </span>
                  <div className="w-full bg-gray-200 rounded-full">
                     <div className="bg-sky-700 text-xs font-medium text-gray-200 text-center p-0.5 leading-none rounded-full w-[70%]"> 70%</div>
                  </div>
               </div>
               {/* GESTION PARC INFORMATIQUE */}
               <div className='pb-4'>
                  <span className="">Gestion du parc informatique</span>
                  <div className="w-full bg-gray-200 rounded-full">
                     <div className="bg-sky-700 text-xs font-medium text-gray-200 text-center p-0.5 leading-none rounded-full w-[65%]"> 65%</div>
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
                  <span className="">Administration server windows ( 2012R2, 2016, 2019, 2022) </span>
                  <div className="w-full bg-gray-200 rounded-full">
                     <div className="bg-sky-700 text-xs font-medium text-gray-200 text-center p-0.5 leading-none rounded-full w-[50%]"> 50%</div>
                  </div>
               </div>  

            </div>

         {/* BLOC DEVELOPPEMENT WEB */}
            <div className='px-3 py-2'>
            <h6 className="text-xl pb-4 underline underline-offset-4 underline-gray-200 text-bold text-center">
               Développement web
            </h6>
               {/* CREATION DE SITES ET APPLICATION WEB */}
            <div className='pb-4'>
               <span className="">Langages: HTML5, CSS3, JavaScript</span>
               <div className="w-full bg-gray-200 rounded-full">
                  <div className="bg-sky-700 text-xs font-medium text-gray-200 text-center p-0.5 leading-none rounded-full w-[65%]"> 65%</div>
               </div>
            </div>
            {/* REACT JS */}
            <div className='pb-4'>
               <span className="">PHP, MYSQL, POSTGRESQL</span>
               <div className="w-full bg-gray-200 rounded-full">
                  <div className="bg-sky-700 text-xs font-medium text-gray-200 text-center p-0.5 leading-none rounded-full w-[40%]"> 40%</div>
               </div>
            </div>  
            {/* PHP ET MYSQL */}
            <div className='pb-4'>
               <span className="">Node Js, Express Js, Axios Js</span>
               <div className="w-full bg-gray-200 rounded-full">
                  <div className="bg-sky-700 text-xs font-medium text-gray-200 text-center p-0.5 leading-none rounded-full w-[35%]"> 35%</div>
               </div>
            </div>
            {/* HTML CSS ET JAVASCRIPT */}
            <div className='pb-4'>
               <span className="">React Js, Tailwindcss, Bootstrap, Materializecss, Bulma css</span>
               <div className="w-full bg-gray-200 rounded-full">
                  <div className="bg-sky-700 text-xs font-medium text-gray-200 text-center p-0.5 leading-none rounded-full w-[70%]"> 70%</div>
               </div>
            </div>  

            </div>

         {/* BLOC DESIGN WEB & INFOGRAPHIE */}
            <div className='px-3 py-2'>
               <h6 className="text-xl pb-4 underline underline-offset-4 underline-gray-200 text-bold text-center">UX/UI Design & Infographie</h6>
                  {/* CREATION DE SUPPORTS DE COMMUNICATION */}
               <div className='pb-4'>
                  <span className="">Création de supports de communications</span>
                  <div className="w-full bg-gray-200 rounded-full">
                     <div className="bg-sky-600 text-xs font-medium text-gray-100 text-center p-0.5 leading-none rounded-full w-[70%]"> 70%</div>
                  </div>
               </div>
               {/* REACT JS */}
               <div className='pb-4'>
                  <span className="">UI & UX design</span>
                  <div className="w-full bg-gray-200 rounded-full">
                     <div className="bg-sky-600 text-xs font-medium text-gray-100 text-center p-0.5 leading-none rounded-full w-[60%]"> 60%</div>
                  </div>
               </div>  
               {/* PHP ET MYSQL */}
               <div className='pb-4'>
                  <span className="">Création des maquettes de site & application</span>
                  <div className="w-full bg-gray-200 rounded-full">
                     <div className="bg-sky-600 text-xs font-medium text-gray-100 text-center p-0.5 leading-none rounded-full w-[65%]"> 65%</div>
                  </div>
               </div>
               {/* HTML CSS ET JAVASCRIPT */}
               <div className='pb-4'>
                  <span className="">Adobe (Photoshop, Illustrator, Indesign, Adobe xd)</span>
                  <div className="w-full bg-gray-200 rounded-full">
                     <div className="bg-sky-600 text-xs font-medium text-gray-100 text-center p-0.5 leading-none rounded-full w-[60%]"> 60%</div>
                  </div>
               </div>  

            </div>
       </div>
      
      {/* BOUTTON POUR TELECHARGER MON CV */}
      <div className='py-5 section'>
         <button className='float-right btn'>
               <a href={Cv} target='_blank' rel='noopener noreferrer'>Obtenir mon CV</a>
         </button> 
      </div>
      </section>
  )
}

export default Competences;