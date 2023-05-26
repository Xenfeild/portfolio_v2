import Image from 'next/image'
import { Inter, Montserrat,Kanit  } from 'next/font/google'
import Layout from '@/componenets/Layout';
import { createClient } from 'contentful';
import Link from 'next/link';
import Card from '@/componenets/cards/Card';

// const inter = Inter({ subsets: ['latin'] })
const kanit = Kanit ({ weight: ["300","400", "500", "900"],
  subsets:["latin"],});

export default function Home({posts}) {
  console.log(posts)
  return (
    <main
      className="">
        <Layout>
          <section className='hero'>
            <div className='welcome'>
              <h1 className=''>Antonio Torres Web-developpeur</h1>
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