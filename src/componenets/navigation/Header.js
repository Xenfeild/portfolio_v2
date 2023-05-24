import Link from 'next/link'
import React from 'react'
import { AiOutlineMail } from "react-icons/ai";

export default function Header() {
  return (
    <header className=''>
        <div className='logo content'>
          <img src="/img/Logo_V1_white-removebg.png" alt="" />
        </div>
        <div className='navbar content'>
          <ul>
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/about">
              <li>About</li>
            </Link>
              <li> | </li>
            <Link href="/contact">
              <li><AiOutlineMail/></li>
            </Link>
          </ul>
        </div>
    </header>
  )
}
