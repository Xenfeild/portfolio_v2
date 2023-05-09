import Image from 'next/image'
import { Inter, Montserrat,  } from 'next/font/google'
import Layout from './components/Layout';

// const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat ({ weight: ["300","400", "500", "900"],
  subsets:["latin"],});

export default function Home() {
  return (
    <main
      className="">
        <Layout>
          <div className='hero'>
            <h1>Antonio Torres</h1>
          </div>
          <div>
            <p>ici il y aura mes projets</p>
            <div>
              <figure>
              <img src="" alt="" />
              <figcaption>
                <p>description</p>
              </figcaption>
              </figure>
            </div>
          </div>
        </Layout>
    </main>
  )
}
