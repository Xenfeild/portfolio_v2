import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className=''>
        <div className='logo content'>
          <img src="/img/Logo_V1.png" alt="" />
        </div>
        <div className='navbar content'>
          <ul>
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/contact">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
    </header>
  )
}
