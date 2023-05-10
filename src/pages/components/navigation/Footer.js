import React from 'react'
import { FaFacebookF, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
        <div className='content'>
            <div className='footerTop'>     
                <div className='footerDescription1'>
                    <div className='logo'>
                        <img src="/img/Logo_V1_white-removebg.png" alt="" />
                    </div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolores ad eos ut incidunt sunt. Quidem, modi ullam? Minima laborum qui maiores inventore doloremque cumque dolore rerum maxime incidunt porro!</p>
                    <div className='icons'>
                        <FaFacebookF/>
                        <FaLinkedin/>
                    </div>
                </div>
                <div className='footerDescription'>
                    <h3>WEB DEVELLOPER</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, a quis reprehenderit expedita doloribus recusandae voluptatem, sint vitae deserunt tempore dolorem soluta saepe dolorum autem modi natus. Perferendis, at neque?</p>
                </div>
                <div className='footerDescription'>
                    <h3>JE REPOND A VOS EN ENJEUX</h3>
                    <p>Communication corporate</p>
                    <p>Communication interne</p>
                    <p>Communication RSE</p>
                </div>
                <div>
                    <h3>Contact</h3>
                    <p>0770041366</p>
                </div>
                </div>
            </div>
        <div className='copyright'>
            <div className='content'>
                <p>no copyright here</p>
            </div>
        </div>
    </footer>
  )
}
