import React, { useState } from 'react';
import Layout from '../components/Layout';
import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


// function 
export default function Portfolio({ post }) {
  const { title, hero, technicalSheet, carousel, customer, sector, services, challenges, webSite } = post.fields;
  const [currentSlide, setCurrentSlide] = useState(0);


  return (
    <Layout>
      <div className='slug'>
        <img src={hero.fields.file.url} alt={title} />
        <div className='slugMain content'>
          <div className='slugLeft'>
            <h2>{title}</h2>
            {documentToReactComponents(technicalSheet)}
          </div>
          <div className='array'>
            <div>
              <p>
                <span>Client : </span>
                {customer}
              </p>
              <hr />
            </div>
            <div>
              <p>
                <span>Secteur : </span>
                {sector}
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
              <hr />
            </div>
            <div>
              <p>
                <span>Site Web : </span>
                {webSite}
              </p>
              <hr />
            </div>
          </div>
        </div>
      </div>
      <div className='carousel-container'>
        <div className='carousel'>
          {carousel.map((file, index) => (
            <div
              key={file.sys.id}
              className={index === currentSlide ? 'slide active' : 'slide'}
            >
              <img src={file.fields.file.url} alt={file.fields.title} />
            </div>
          ))}
        </div>
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