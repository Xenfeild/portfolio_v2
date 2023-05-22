import React from 'react'
import Layout from '../componenets/Layout'

export default function pagetest() {
  return (
    <div>
        <Layout>
        <div className=''>
            <img src="/img/perspective.webp" alt="" />
        </div>
        <div className='technicalSheet'>
            <div className=''>
                <h2>Title Project</h2>
                <div className='flex'>
                    <p>tag</p>
                    <p>tag</p>
                    <p>tag</p>
                </div>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod placeat iure tempore accusantium eaque ab? Deleniti quia corporis, similique veniam impedit animi ad ipsa labore dolorem eligendi, maiores totam ea!</p>
            </div>
            <div className='technicalTab'>
                <p>type exercie :</p>
                <p>on verra</p>
                <hr />
            </div>
            <div>
                <p>type exercie :</p>
                <p>on verra</p>
                <hr />
            </div>
            <div>
                <p>type exercie :</p>
                <p>on verra</p>
                <hr />
            </div>
            <div>

            </div>
        </div>
        <div className='carousel'>
           
        </div>
        <div className='flex justify-between'>
            <p>page précédent</p>
            <p>home</p>
            <p>page suivante</p>
        </div>
        </Layout>
    </div>
  )
}
