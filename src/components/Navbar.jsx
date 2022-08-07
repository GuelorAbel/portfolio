import React, { useState } from 'react';
import Logo from '../assets/abel.png';
import {FaBars, FaTimes} from 'react-icons/fa';

function Navbar () {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav);
    return (
        // BLOC DE LA NAVIGATION DU SITE
        <nav className='bg-sky-500 w-[100%] text-white font-abel fixed top-0 left-0 z-20'>
            <div className='w-full shadow-sm'>
                <div className="section py-4 flex justify-between items-center">
                    {/* EMPLACEMENT DU LOGO */}
                    <a href="./" className='cursor-pointer z-10'>
                        <img src={Logo} alt="Les initales de mon nom complèt comme logo" className='w-20'/>
                    </a>

                    {/* LIENS DE NAVIGATION DU SITE */}
                    <ul className='hidden md:flex items-center'>
                        <li className='px-3'>Accueil</li>
                        <li className='px-3'>A propos</li>
                        <li className='px-3'>Compétences</li>
                        <li className='px-3'>Expériences</li>
                        <li className='px-3'>Réalisations</li>
                    </ul>

                    {/* ICONS D'OUVERTURE ET DE FERMETURE DU MENU */}
                    <button onClick={handleClick} className='md:hidden z-10'>
                        {!nav ? <FaBars size={20}/> : <FaTimes size={20}/>}
                    </button>

                    {/* LE MENU SUR MOBILE */}
                    <ul className={!nav ? 'hidden' : 'showmenu'}>
                        <li className='py-6 text-2xl'>Accueil</li>
                        <li className='py-6 text-2xl'>A propos</li>
                        <li className='py-6 text-2xl'>Compétences</li>
                        <li className='py-6 text-2xl'>Expériences</li>
                        <li className='py-6 text-2xl'>Réalisations</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
