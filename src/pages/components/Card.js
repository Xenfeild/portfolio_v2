import React from 'react'

export default function Card({post}) {
    const { hero, title, } = post.fields
    // console.log(featuredImage.fields)
    const urlImg = hero.fields.file.url
  return (
    <figure className='card'>
          <img src={urlImg} alt={title} className='max-w-xs cardImg' />
          <figcaption className='font-bold'>{title}</figcaption>
    </figure>
  )
}