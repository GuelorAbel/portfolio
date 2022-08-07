import React from 'react'
import Jobcard from './Jobcard'

// IMPORT DES IMAGES DES SITES REALISES
import site from '../assets/Site1.png'
import pts from '../assets/pts-gabon.png'
import logsint from '../assets/logs-international.png'
import drillwatt from '../assets/drill-watt.png'
import groupged from '../assets/groupged.png'

function Construction() {
  return (
    <section className='py-14' name='travaux'>
       <div className="section font-abel">
         <h3 className='text-3xl uppercase text-center mb-1 font-bold text-gray-700'>Mes réalisations</h3>
         <div className='w-[100px] h-[4px] bg-sky-500 mx-auto rounded-full'></div>

          <div className="grid md:grid-cols-3 gap-8 mt-12 py-4">

            {/* LA VUE DES TRAVAUX SOUS FORME DE CARTE */}
            {/* PREMIER GROUPE */}
            <Jobcard titre="Site web AAG" url="https://www.abel.com" src={site} />
            <Jobcard titre="PTS-Gabon" url="https://www.pts-gabon.com" src={pts} />
            <Jobcard titre="Logs-international" url="https://www.logs-international.org" src={logsint} />

            {/* DEUXIEME GROUPE */}
            <Jobcard titre="Drill-Watt" url="https://www.drill-watt.com" src={drillwatt} />
            <Jobcard titre="Group-GED" url="https://www.group-ged.com" src={groupged} />

            {/* TROIXIEME GROUPE */}

          </div>
         
       </div>
       
    </section>
  )
}

export default Construction;