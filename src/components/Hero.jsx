import React from 'react';
import {HiArrowNarrowRight, HiOutlineMail} from 'react-icons/hi';
import {FaFacebook, FaGithub, FaTwitterSquare, FaLinkedin, FaWhatsappSquare} from 'react-icons/fa';
import { Fade } from 'react-reveal';

function Hero() {
    return (
        <section className='bg-back bg-cover bg-center bg-no-repeat w-full py-20 text-white flex flex-col justify-center font-abel'>
            {/* ICONES DES RESEAUX SOCIAUX */}
            <div className='hidden lg:block fixed w-[10%]'>
                <ul className='px-1'>
                    <li className='w-[150px] flex flex-col justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300'>
                        <a href="https://www.facebook.com" className='flex justify-between items-center h-12 w-full bg-blue-700 px-3'
                        rel="noopener noreferrer" target="_blank">
                            facebook <FaFacebook size={25} />
                        </a>
                    </li>

                    <li className='w-[150px] flex flex-col justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300'>
                        <a href="https://www.twitter.com" className='flex justify-between items-center h-12 w-full bg-sky-300 px-3'
                        rel="noopener noreferrer" target="_blank">
                            twitter <FaTwitterSquare size={25} />
                        </a>
                    </li>

                    <li className='w-[150px] flex flex-col justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300'>
                        <a href="https://www.github.com" className='flex justify-between items-center h-12 w-full bg-gray-800 px-3'
                        rel="noopener noreferrer" target="_blank">
                            GitHub <FaGithub size={25} />
                        </a>
                    </li>

                    <li className='w-[150px] flex flex-col justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300'>
                        <a href="https://www.linkdin.com" className='flex justify-between items-center h-12 w-full bg-sky-400 px-3'
                        rel="noopener noreferrer" target="_blank">
                            Linkdin <FaLinkedin size={25} />
                        </a>
                    </li>

                    <li className='w-[150px] flex flex-col justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300'>
                        <a href="mailto:guelorabygmail.com" className='flex justify-between items-center h-12 w-full bg-gray-400 px-3'
                        rel="noopener noreferrer" target="_blank">
                            Email <HiOutlineMail size={25} />
                        </a>
                    </li>

                    <li className='w-[150px] flex flex-col justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300'>
                        <a href="https://www.whatspp.com" className='flex justify-between items-center h-12 w-full bg-green-500 px-3'
                        rel="noopener noreferrer" target="_blank">
                            Whatsapp <FaWhatsappSquare size={25} />
                        </a>
                    </li>

                </ul>
            </div>

            {/* SECTION QUI ME PRESENTE */}
            <div className='w-[100%] md:w-[90%]'>
                <div className="sections mt-6 sm:mt-4 md:mt-0">
                    <Fade bottom>
                        <p className="text-lg sm:text-xl py-2 font-thin">
                            La passion des nouvelles technologies du web
                        </p>

                        <h2 className="text-xl sm:text-6xl pb-2 font-abel">
                            Guelor Abel ANGO
                        </h2>

                        <div className='pb-6'>
                            <h1 className='text-xl sm:text-5xl font-bold text-gray-100 pb-4'>
                                Technicien Système & Réseau <br /> Développeur Web
                            </h1>
                            <p className='text-lg font-light w-[70%]'>
                                Je suis un technnicien polyvalant alaise aussi bien bien dans le hardware que dans le 
                                software,
                                mais aussi dans la gestion du parc informatique, l'administration du réseau, le design web et la conception 
                                de site web...
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
            </div>
            
        </section>
    )
}

export default Hero;
