import React from 'react';
import {HiArrowNarrowRight, HiOutlineMail} from 'react-icons/hi';
import {FaFacebook, FaGithub, FaTwitterSquare, FaLinkedin, FaWhatsappSquare} from 'react-icons/fa';
import { Fade } from 'react-reveal';

function Hero() {
    return (
        <section className='bg-sky-500 w-[100%] h-screen text-white flex flex-col justify-center font-abel'>
            {/* ICONES DES RESEAUX SOCIAUX */}
            <div className='hidden lg:block fixed w-[400px]'>
                <ul className='px-1'>
                    <li className='w-[150px] flex flex-col justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300'>
                        <a href="https://www.facebook.com" className='flex justify-between items-center h-12 w-full bg-blue-700 px-3'
                        rel="noopener noreferrer" target="_blank">
                            facebook <FaFacebook size={30} />
                        </a>
                    </li>

                    <li className='w-[150px] flex flex-col justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300'>
                        <a href="https://www.twitter.com" className='flex justify-between items-center h-12 w-full bg-sky-300 px-3'
                        rel="noopener noreferrer" target="_blank">
                            twitter <FaTwitterSquare size={30} />
                        </a>
                    </li>

                    <li className='w-[150px] flex flex-col justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300'>
                        <a href="https://www.github.com" className='flex justify-between items-center h-12 w-full bg-gray-800 px-3'
                        rel="noopener noreferrer" target="_blank">
                            GitHub <FaGithub size={30} />
                        </a>
                    </li>

                    <li className='w-[150px] flex flex-col justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300'>
                        <a href="https://www.linkdin.com" className='flex justify-between items-center h-12 w-full bg-sky-400 px-3'
                        rel="noopener noreferrer" target="_blank">
                            Linkdin <FaLinkedin size={30} />
                        </a>
                    </li>

                    <li className='w-[150px] flex flex-col justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300'>
                        <a href="mailto:guelorabygmail.com" className='flex justify-between items-center h-12 w-full bg-gray-400 px-3'
                        rel="noopener noreferrer" target="_blank">
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>

                    <li className='w-[150px] flex flex-col justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300'>
                        <a href="https://www.whatspp.com" className='flex justify-between items-center h-12 w-full bg-green-500 px-3'
                        rel="noopener noreferrer" target="_blank">
                            Whatsapp <FaWhatsappSquare size={30} />
                        </a>
                    </li>

                </ul>
            </div>

            {/* SECTION QUI ME PRESENTE */}
            
            <div className="sections mt-6 sm:mt-4 md:mt-0">
                <Fade bottom>
                    <p className="text-lg sm:text-2xl py-3 font-thin">
                        La passion de l'informatique et du numérique
                    </p>

                    <h1 className="text-xl sm:text-6xl pb-2 font-abel">
                        Guelor Abel ANGO
                    </h1>

                    <div className='pb-6'>
                        <h2 className='text-xl sm:text-5xl font-bold text-gray-100 pb-4'>
                            Technicien Système & Réseau <br /> Développeur Web
                        </h2>
                        <p className='text-lg font-light'>
                            Je suis un technnicien polyvalant alaise aussi bien bien dans le hardware que dans le software <br />
                            en passant par la gestion du parc informatique, l'administration du réseau, le design web et la conception de zéro
                            d'un site web...
                        </p>
                    </div>
                    
                    <button className='btn flex justify-between items-center cursor-pointer group'>
                        Voir mes travaux 
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight size={22} className="ml-3" />
                        </span>
                    </button>
                </Fade>
            </div>
            
        
        </section>
    )
}

export default Hero;
