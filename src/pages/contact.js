import React from 'react'
import Layout from './components/Layout'

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
                        <h2>Osez</h2>
                        <p>Vous n'êtes <span>pas encore client</span> et vous rêvez d'un <span>site web créatif et responsive?</span>
                        </p>
                        <p>Même <span>confinées,</span> je vous <span>répondond rapidement !</span></p>
                        <br />
                        <p><span>10 rue jacques brel 27940 Aubvoye</span></p>
                        <div className='contactButton'>
                            <button>Recrutement</button>
                            <button>Fournisseurs</button>
                        </div>
                    </div>
                    <div className='contactForm'>
                        <input type="text" placeholder='Nom complet' />
                        <input type="text" placeholder='Société' />
                        <input type="email" placeholder='Email' />
                        <input type="phone" placeholder='téléphone' />
                        <input type="text" placeholder='objet' />
                        <input type="textarea" placeholder='Message' id="message"/>
                    </div>
                </div>
            </div>
        </Layout>
    </div>
  )
}
