import React from 'react';
import svg1 from './images/about-us.svg';
import newProd from './images/new1.png';
import Footer from '../footer/Footer';

function AboutUs() {
    return (
        <div className='abt'>
            <section className='about-us'>
                <div className='left-content'>
                    <div>
                        <h1>About us</h1>
                        <p className='desc'>Welcome to Parth Enterprise, your number one source for all product,
                            such as customised tshirts, customised sweatshirts, spotify frames, spotify cassettes,
                            spotify keychain, gift hampers, and many more.
                            We're dedicated to giving you the very best product, with a focus on three major
                            characteristics, dependability, customer service and uniqueness.</p>
                    </div>
                </div>
                <img src={svg1} alt="SVG" />
            </section>

            <section className='our-mission'>
                <h1>Our Mission</h1>
                <div className="grid1">
                    <div>
                        <h2>Who we are?</h2>
                        <p>We are a group of team, all individuals, with different imaginations and
                            thinking, but we work as one, by inputing ideas from all and produce fabulous products
                            for our customers.
                        </p>
                    </div>
                    <div>
                        <h2>What we do?</h2>
                        <p>We produce the best products for our customers, according to their needs. We create products
                            such as customised tshirts, customised sweatshirts, spotify gifts such as frame, keychain, cassette,
                            gift hampers customised and plain tshirts.
                        </p>
                    </div>
                </div>
            </section>
            <img src={newProd} alt="New Product" className='image' />
            <Footer />
        </div>
    )
}

export default AboutUs;