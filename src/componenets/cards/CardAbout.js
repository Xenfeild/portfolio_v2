import React from 'react'

export default function CardAbout() {
      const handleDownload = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = '/img/Astro2.jpg';
    downloadLink.setAttribute('download', 'Astro2.jpg');
    downloadLink.click();
  };

  return (
<section className='about '>
  <div className='topAbout'>
    <div className='photo'>
      <img src="/img/1652787781819.jpg" alt=""/>
    </div>
    <div className=''>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum nihil incidunt neque velit iure distinctio aspernatur, hic odit? Veniam in nam explicabo natus magni autem, maxime est quasi soluta ratione.
      </p>
    </div>
  </div>
  <div className='AboutBtn'>      
    <button onClick={handleDownload}>Télécharger le cv</button>
  </div>
</section>
  )
}