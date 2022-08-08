import React from 'react'
import { Slide } from 'react-reveal';
import Abyimg from '../assets/abel.jpg'
import Cv from '../assets/cvAbel.pdf'

function About() {
  return (
    <section className='py-14 md:py-16 font-abel w-full' name="about">
      {/* LE TITRE DE MA SECTION + DECO A L'AIDE D'UN TRAIT */}
      <h3 className='text-3xl uppercase text-center mb-1 font-bold text-gray-700'>A propos de moi</h3>
      <div className='w-[100px] h-[4px] bg-sky-500 mx-auto rounded-full'></div>
       <div className="section grid md:grid-cols-2 md:gap-8 gap-0">
        {/* BLOC DU CONTENU */}
          <div className='text-thin my-auto py-6 md:pt-0'>
              <Slide left>
                <p>
                    Je me nomme <span className="font-semibold">Guelor Abel ANGO</span>,<br />
                    <span className='text-xl text-sky-500 font-bold'>Technicien système & réseau / Développeur web</span>.
                </p>
                <p className='mt-2 leading-7 pb-4'>
                    Détenteur d'un baccalauréat série A1, je poursuis mes études supérieures à l'université Omar BONGO ONDIMBA (UOB) en faculté des  
                    <strong> Lettres et Sciences Humaines, département : psychologie</strong>.<br/> Autodidacte, 
                    c'est à la suite de mon parcours que je rentre définitivement dans le domaine de l'informatique notament, la maintenance informatique : 
                    le hardware et le software mais aussi, l'administration du réseau local(LAN) et la gestion des Serveurs DNS. <br />
                    Deux ans après, je fais la connaissance des langages du web et très vite, j'y trouve un grand intérêt aux langages : <span><b>HTML5</b></span>,<span><b> CSS3 </b></span>
                    et<span><b> Javascript</b></span>.
                    <br />J'entreprend alors une reconversion professionnelle, au moyen de différentes supports de cours sur internet(Youtube). Je suis ma formation sur  
                    <a rel="noreferrer" href="https//www.openclassroms.com" target="_blank"><b className='uppercase'> Openclassroms</b></a>, célèbre plateforme de formation en ligne où 
                    j'obtient les certificats de réussite en : HTML&CSS, JAVASCRIPT, PHP&MYSQL, REACTJS, GESTION D'UN PARC INFORMATIQUE AVEVC GLPI, CONCEPTION D'UN RESEAU TCP/IP, UX DESIGN...
                </p>
                <button className='btn-sky'>
                    <a href={Cv} target='_blank' rel='noopener noreferrer'>Obtenir mon CV</a>
                </button>
              </Slide>
          </div>
        {/* BLOC DE L'IMAGE */}
          <div className='p-4 overflow-hidden'>
            <Slide right>
              <img src={Abyimg} alt="Abel ANGO en pleine marche" className='hidden md:flex rounded-full mx-auto' />
            </Slide>
          </div>
          
       </div>
    </section>
  )
}

export default About;