import React from 'react';
import Layout from '@/componenets/Layout';
import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default function Portfolio({ post }) {
  const { title, hero, technicalSheet, carousel, customer, stack, services, challenges, webSite, subtitle } = post.fields;

  return (
    <Layout>
      <div className='slug'>
        <img src={hero.fields.file.url} alt={title} />
        <div className='slugMain '>
          <div className='slugLeft'>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            {documentToReactComponents(technicalSheet)}
          </div>
          <div className='slugRight'>
            <div>
              <p>
                <span>Client : </span>
                {customer}
              </p>
              <hr />
            </div>
            <div>
              <p>
                <span>Stack utilisé :     </span>    
                {stack}
              </p>
              <hr />
            </div>
            <div>
              <p>
                <span>Services : </span>
                {services}
              </p>
              <hr />
            </div>
            <div>
              <p>
                <span>Enjeux : </span>
                {challenges}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='thumbnails'>
        {carousel.map((file) => (
          <a key={file.sys.id} 
          href={file.fields.file.url} 
          target='_blank' 
          rel='noopener noreferrer'>
            <img src={file.fields.file.url} 
            alt={file.fields.title} />
          </a>
        ))}
      </div>
    </Layout>
  );
}

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticPaths() {
  const res = await client.getEntries({
    content_type: 'portfolio',
  });

  const paths = res.items.map((item) => ({
    params: { slug: item.fields.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: 'portfolio',
    'fields.slug': params.slug,
  });

  return {
    props: { post: items[0] },
  };
}