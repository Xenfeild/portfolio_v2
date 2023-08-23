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
    <div className='descriptionAbout'>
      <p>"Je suis Antonio Torres developpeur front end passionné par la création d'expériences en ligne captivantes. Fort d'une base en HTML, CSS, JavaScript et php et d'utilisation de framework tel que wordpress, Symfony et react Js je m'efforce de transformer des concepts créatifs en sites web fonctionnels et esthétiques. Toujours avide d'apprendre, je suis ouvert aux nouvelles technologies et prêt à collaborer pour relever des défis passionnants. Mon objectif est de grandir en tant que professionnel du développement web tout en contribuant à des projets innovants et inspirants."
      </p>
    </div>
    <div className='AboutBtn'>      
    <button onClick={handleDownload}>Télécharger le cv</button>
  </div>
  </div>
</section>
  )
}