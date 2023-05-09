import React from 'react'
import { FaFacebookF, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
        <div className='content'>
            <div>
                <h2>Logo</h2>
            </div>
            <div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolores ad eos ut incidunt sunt. Quidem, modi ullam? Minima laborum qui maiores inventore doloremque cumque dolore rerum maxime incidunt porro!</p>
            </div>
            <div className='icons'>
                <FaFacebookF/>
                <FaLinkedin/>
            </div>
            <div>
                <p>Contact</p>
            </div>
            <div className='copyright'>
                <p>no copyright here</p>
            </div>
        </div>
    </footer>
  )
}
