import React from 'react'
import Layout from '../components/Layout'
import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


const client = createClient({
  space:process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken:process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});


//2.gernerated or retrieve all of slugs of my articles

export  async function getStaticPaths() {
//a-recupere les posts ds le contentful
const res = await client.getEntries({
  content_type: "portfolio",
 

});

//b- retrieve posts slugs
const slugs = res.items.map((slug) => {
  return {
    params: { slug: slug.fields.slug },
  };
});


return {
  paths: slugs,
  fallback: false // tous les slug qui ne st pas ds mon path => page 404
};
}



export async function getStaticProps({ params }) {
  console.log("params:", params);


  const res = await client.getEntries({
    content_type: "portfolio",
    "fields.slug": params.slug
  });


  const post = res.items;

  return {
    props: {
      post: post[0],
    }
  }
}




export default function index({post}) {
  console.log("post:", post)
  const { title, hero, technicalSheet, carousel } = post.fields;
  return (
    <div>
        <Layout>
          <div className='slug'>
            <img
            src={hero.fields.file.url}
            alt={title}
            />
            <div className='slugMain'>
              <div className='content2'>
                <h2>{post.fields.title}</h2>
                {documentToReactComponents(technicalSheet)}
              </div>
            </div>
            <div className="carousel carousel-end rounded-box">
              <div className="carousel-item">
              </div> 
            </div>
          </div>
        </Layout>
    </div>
  )
}
