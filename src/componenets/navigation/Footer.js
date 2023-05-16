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
                    <p>Antonio Torres web develloper junior à votre service dans l'objectif de creer le site de vos rêves</p>
                    <div className='icons'>
                        <FaFacebookF/>
                        <FaLinkedin/>
                    </div>
                </div>
                <hr />
                <div className='footerDescription'>
                    <h3>WEB DEVELLOPER</h3>
                    <p>En formation à l'ESCCI, avec une expérience qui se forge au fur et à mesure</p>
                </div>
                <hr />
                <div className='footerDescription'>
                    <h3>JE REPOND A VOS EN ENJEUX</h3>
                    <p>Communication original</p>
                    <p>Communication artistique</p>
                    <p>Communication interne</p>
                </div>
                <br />
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
