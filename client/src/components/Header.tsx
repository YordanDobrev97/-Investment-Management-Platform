import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <section className='top-section'>
        <article className='article-container'>
          <article>
            <h1>Manage Your Finances Easier Than Ever.</h1>
            <p>Offering tailored advice and strategic insights to help clients achieve their financial goals. Let's delve into the world of these financial guides and explore their crucial role in today's economic landscape.</p>
          </article>

          <article className='right-image'>
            <Image src={`/phone.png`} alt='phone-brand' width={200} height={200} />
          </article>
        </article>

        <button className='btn-more'>See more</button>
      </section>
  )
}

export default Header
