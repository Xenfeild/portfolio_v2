import Image from 'next/image'
import { Inter, Montserrat,  } from 'next/font/google'
import Layout from '@/componenets/Layout';
import { createClient } from 'contentful';
import Link from 'next/link';
import Card from '@/componenets/cards/Card';

// const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat ({ weight: ["300","400", "500", "900"],
  subsets:["latin"],});

export default function Home({posts}) {
  console.log(posts)
  return (
    <main
      className="">
        <Layout>
          <section className='hero'>
            <div className='welcome'>
              <h1 className=''>Antonio Torres Web-develloper</h1>
            </div>
          </section>
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
          </section>
          <section className='project'>
            <h2>Mes Projets</h2>
            <div className='home'>
              
          {
            posts.map((post)=>(
              <Link href={`/post/${post.fields.slug}`} >
              <Card 
              key={post.sys.id} 
              post={post}
              />
              </Link>
            ))}
            </div>
          </section>
        </Layout>
    </main>
  )
}

export async function getStaticProps() {
  // 1 - Connect to contentful
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });
  // console.log(client);

  // 2 - Take data in case of successe for content_type => portfolio
  // limit of 2 post
  const data = await client.getEntries({
    content_type: 'portfolio',
    order: "sys.createdAt",
    limit: 8,
  });



// 3- send data in props of the page

  return {
    props: {
      posts: data.items,
    },
  };
}