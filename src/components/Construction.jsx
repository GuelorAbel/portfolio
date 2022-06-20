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
    <section className='py-20' name='travaux'>
       <div className="section font-abel">
         <h3 className='text-3xl uppercase text-center mb-1 font-bold text-gray-700'>Mes réalisations</h3>
         <div className='w-[100px] h-[4px] bg-sky-500 mx-auto rounded-full'></div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            {/* LA VUE DES TRAVAUX SOUS FORME DE CARTE */}
            <Jobcard titre="Site web AAG" desc="Le site a été développé par Abel avec la technologie React Js." url="https://www.abel.com" src={site} />
            <Jobcard titre="PTS-Gabon" desc="Site de la société PTS développeé en PHP et le framework bootstrapp" url="https://www.pts-gabon.com" src={pts} />
            <Jobcard titre="Logs-international"  desc="Le site a été développeé avec HTML5, CSS3 et Javascript" url="https://www.logs-international.org" src={logsint} />
            <Jobcard titre="Drill-Watt" desc="Développé pour le compte de Icon3D avec le PHP et le framework Materialize" url="https://www.drill-watt.com" src={drillwatt} />
            <Jobcard titre="Group-GED" desc="Développé pour le compte du group-ged avec React Js, PHP et MYSQL" url="https://www.group-ged.com" src={groupged} />

          </div>
         
       </div>
       
    </section>
  )
}

export default Construction;