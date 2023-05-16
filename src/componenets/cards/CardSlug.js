import React from 'react'

export default function CardSlug({post})
    const{hero, title, techniclaSheet} = post.fields

    const urlImg = hero.fields.files.url
{
  return (
    <div><img src={urlImg} alt={title}/>
    <p>{title}</p>
    <p>{techniclaSheet}</p>
    </div>
  )
}
