import Image from 'next/image'
import { Inter, Montserrat,  } from 'next/font/google'
import CardAbout from '@/componenets/cards/CardAbout';
import Layout from '@/componenets/Layout';
import { createClient } from 'contentful';
import Link from 'next/link';
import Card from '@/componenets/cards/Card';

// const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat ({ weight: ["300","400", "500", "900"],
  subsets:["latin"],});

  
export default function about({posts}) {
  console.log(posts)

  return (
    <main
      className="">
        <Layout>
          <section className='hero'>
            <div className='welcome'>
              <h2 className=''>About</h2>
            </div>
          </section>
          <CardAbout/>
          <section className='skill'>
            <h2>Compétences</h2>
            <div className='skills'>
              <div>
                <img src="/img/html.png" alt="html" />
                <p>HTML 5</p>
              </div>
              <div>
                <img src="/img/css.png" alt="css" />
                <p>CSS</p>
              </div>
              <div>
                <img src="/img/javascript.png" alt="javascript" />
                <p>JavaScript</p>
              </div>
              <div>
                <img src="/img/php.png" alt="php" />
                <p>PHP</p>
              </div>
              <div>
                <img src="/img/wordpress.png" alt="wordpress" />
                <p>WordPress</p>
              </div>
              <div>
                <img src="/img/symfony.png" alt="symfony" />
                <p>Symfony</p>
              </div>
              <div>
                <img src="/img/react.png" alt="react" />
                <p>React JS</p>
              </div>
            </div>
           
            {/* <input type="button" value="test download" onClick={handleDownload} className='downloadBtn'/> */}
          </section>
        </Layout>
    </main>
  )
}

