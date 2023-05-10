import React from 'react'
import Layout from './components/Layout'
import { createClient } from 'contentful';

const client = createClient({
  space:process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken:process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});


//2.generere ou recupperrer ts les slug de mes articles

export  async function getStaticPaths() {
//a-recupere les posts ds le contentful
const res = await client.getEntries({
  content_type: "porfolio",
 

});

//b- recuperes les slug des posts
const slugs = res.items.map((slug) => {
  return {
    params: { slug: slug.fields.slug },
  };
});

//c-renvoie tous les slugs ds path (chemin //route)
return {
  paths: slugs,
  fallback: false // tous les slug qui ne st pas ds mon path => page 404
};
}


// 3- recuperre data du post en fonction du slug
export async function getStaticProps({ params }) {
  console.log("params:", params);
  //A.Recupere la data lié au slug

  const res = await client.getEntries({
    content_type: "portfolio",
    "fields.slug": params.slug
  });

  // b-je stock la data du post ds une variables
  const post = res.items;

  return {
    props: {
      post: post[0],
    }
  }
}

export default function index() {
  return (
    <div>
        <Layout>
        index
        </Layout>
    </div>
  )
}
