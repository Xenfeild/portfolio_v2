import React from 'react';
import Swal from 'sweetalert2';
import Layout from '@/componenets/Layout';

export default function Contact() {
  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Récupérer les valeurs des champs du formulaire
    const nomComplet = document.getElementById('nomComplet').value;
    const societe = document.getElementById('societe').value;
    const email = document.getElementById('email').value;
    const telephone = document.getElementById('telephone').value;
    const objet = document.getElementById('objet').value;
    const message = document.getElementById('message').value;

    // Envoyer l'e-mail (simulé pour l'exemple)
    sendEmail(nomComplet, societe, email, telephone, objet, message);
  };

  const sendEmail = (nomComplet, societe, email, telephone, objet, message) => {
    // Ici, vous pouvez utiliser une API d'envoi d'e-mails ou une autre méthode d'envoi d'e-mails côté client (par exemple, utiliser l'API Mailgun, SendGrid, etc.)
    // Pour cet exemple, nous allons simplement afficher les données du formulaire dans une alerte
    const emailContent = `
      Nom complet: ${nomComplet}
      Société: ${societe}
      Email: ${email}
      Téléphone: ${telephone}
      Objet: ${objet}
      Message: ${message}
    `;

    Swal.fire({
      icon: 'success',
      title: 'Formulaire envoyé',
      text: 'Votre message a été envoyé avec succès.',
      confirmButtonText: 'OK'
    }).then(() => {
      console.log(emailContent);
      // Vous pouvez ajouter ici une logique supplémentaire si nécessaire
    });
  };

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
              <p>
                vous souahitez profiter de mes services 
              </p>
              <p>N'hésitez pas à me contacter</p>
              <br />
              <p>
                <span>07.70.04.13.66</span>
              </p>
              <br />
              <p>
                <span>10 rue Jacques Brel 27940 Aubevoye</span>
              </p>
              <div className='contactButton'>
                <button onClick={handleFormSubmit}>Envoyer</button>
              </div>
            </div>
            <div className='contactForm'>
              <div className='nameSociety'>
                <input type='text' placeholder='Nom complet' id='nomComplet' />
                <input type='text' placeholder='Société' id='societe' />
              </div>
              <div className='mailPhone'>
                <input type='email' placeholder='Email' id='email' />
                <input type='phone' placeholder='Téléphone' id='telephone' />
              </div>
              <input type='text' placeholder='Objet' id='objet' />
              <textarea placeholder='Message' id='message' />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
