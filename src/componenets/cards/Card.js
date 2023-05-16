import React from 'react'

export default function Card({post}) {
    const { hero, title, } = post.fields
    // console.log(featuredImage.fields)
    const urlImg = hero.fields.file.url
  return (
    <div className='borderCard'>
      <figure className='card'>
            <img src={urlImg} alt={title} className='' />
            <figcaption className=''>{title}</figcaption>
      </figure>
    </div>
  )
}