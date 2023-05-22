import React from 'react'
import Layout from '@/componenets/Layout'

export default function contact() {
  return (
    <div>
        <Layout>
            <div>
                <div className='heroContact'>
                    <h2>Un projet?</h2>
                </div>
                <div className='content contactMain '>
                    <div className='contactLeft'>
                        <h2>Contact</h2>
                        <p>Vous n'êtes <span>pas encore client</span> et vous rêvez d'un <span>site web créatif et responsive?</span>
                        </p>
                        <p>N'hésitez pas à me contacter</p>
                        <br />
                        <p><span>10 rue jacques brel 27940 Aubvoye</span></p>
                        <div className='contactButton'>
                            <button>Envoyer</button>
                        </div>
                    </div>
                    <div className='contactForm'>
                        <div className="nameSociety">
                            <input type="text" placeholder='Nom complet' />
                            <input type="text" placeholder='Société' />
                        </div>
                        <div className="mailPhone">
                            <input type="email" placeholder='Email' />
                            <input type="phone" placeholder='téléphone' />
                        </div>
                        <input type="text" placeholder='objet' />
                        <input type="textarea" placeholder='Message' id="message"/>
                    </div>
                </div>
            </div>
        </Layout>
    </div>
  )
}
