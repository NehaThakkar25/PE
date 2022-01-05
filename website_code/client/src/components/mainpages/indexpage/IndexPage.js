import React from 'react';
import BannerItem from './BannerItem';
import Footer from '../footer/Footer'
import Banner1 from './images/banner_1.jpg';
import Banner2 from './images/banner_2.jpg';
import Banner3 from './images/banner_3.jpg';
import Banner4 from './images/banner_4.jpg';
import AboutImg from './images/about.png';
import Product1 from './images/product_2.png';
import Product2 from './images/product_6.png';
import Product3 from './images/product_4.png';
import Product4 from './images/product_1.png';
import Product5 from './images/product_8.png';
import BestSellers from './BestSeller';

import ABG from './images/customerLogos/ABG.png';
import Adani from './images/customerLogos/adani.png';
import AU from './images/customerLogos/AU.png';
import CERA from './images/customerLogos/CERA.png';
import GLS from './images/customerLogos/GLS.png';
import LG from './images/customerLogos/LG.png';
import MI from './images/customerLogos/MI.png';
import NU from './images/customerLogos/NU.png';
import PDPU from './images/customerLogos/PDPU.png';


function IndexPage(){
    return(
        <div className="IndexPage">
            <section className="main_slider">
                    <div className="overlay"></div>
                    <div className="main_slider_content">
                        <h4>Winter Collection 2022</h4>
                        <h1>Plain bright color tshirts<br />just for you</h1>
                        <div className="yellow_button"><a href="/products">Go to products</a></div>
                    </div>
            </section>
            <section className="banners">
                <div className="banner-items">
                    <BannerItem title="Custom Print T-shirts" image={Banner1} />
                    <BannerItem title="Gift Hampers" image={Banner2} />
                    <BannerItem title="Plain Tshirts" image={Banner3} />
                    <BannerItem title="Spotify Gifts" image={Banner4} />
                </div>
            </section>
            <section className="bestsellers">
                <h1>Our BestSellers</h1>
                <div className="products">
                <BestSellers image={Product1} product_name="Round Neck Black T-shirt" price="₹200.00"/>
                <BestSellers image={Product2} product_name="Spotify Wooden Cassette" price="₹300.00"/>
                <BestSellers image={Product5} product_name="Spanish Neck Blue T-shirt" price="₹200.00"/>
                <BestSellers image={Product3} product_name="Spotify Keychain" price="₹250.00"/>
                <BestSellers image={Product4} product_name="Chocolate Gift Hamper" price="₹650.00"/>
                </div>
            </section>
            <section className="about">
                <img src={AboutImg} alt="" />
                <div className="about_content">
                    <h2>Get your personalised gifts today.</h2>
                    <p>Special gifts for your friends, family and loved ones. Get them today!<br />
                    Personalised design tshirts, illustration wallet cards, spotify frames, spotify cassette tape, gift hampers and much more. Check out our products soon.</p>
                </div>
            </section>
            <section className="ourCustomers">
                <h1>Our Happy Clients</h1>
                    <div className="customer-logos">
                        <img src={ABG} alt="Aditya Birla Group"/>
                        <img src={AU} alt="Ahmedabad University"/>
                        <img src={Adani} alt="Adani"/>
                        <img src={LG} alt="LG"/>
                        <img src={MI} alt="MI"/>
                    </div>
                    <div className="customer-logos">
                        <img src={PDPU} alt="PDPU"/>
                        <img src={CERA} alt="CERA"/>
                        <img src={NU} alt="Nirma University"/>
                        <img src={GLS} alt="GLS University"/>
                    </div>
            </section>
            <Footer />
        </div>
    )
}

export default IndexPage;