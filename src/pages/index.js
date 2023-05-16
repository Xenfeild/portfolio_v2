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
          <div className='hero'>
            <div className='welcome'>
              <h1 className=''>Portfolio Antonio Torres</h1>
            </div>
          </div>
          <div className='home'>
                      {/* cards */}
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
    limit: 4,
  });



// 3- send data in props of the page

  return {
    props: {
      posts: data.items,
    },
  };
}