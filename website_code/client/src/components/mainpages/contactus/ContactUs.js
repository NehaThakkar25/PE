import React from 'react';
import Footer from '../footer/Footer'

function ContactUs(){
    return(
        <div className='cnt'>
            <div className='yellow-block'></div> 
            <div className='grid3'>
                <section className='contact-details'>
                    <h1>Contact Us</h1>   
                    <div className='grid2'>
                            <div>
                                <i className='fa fa-phone'></i>
                                <p>+91 886-601-9607</p>
                            </div>
                            <div>
                                <i className='fa fa-envelope'></i>
                                <p>biz.parthenterprise@gmail.com</p>
                            </div>
                            <div>
                                <i className='fa fa-map-marker-alt'></i>
                                <p>
                                Parth Enterprise,<br />
                                1493/10/S Dariyapur Gate,<br />
                                Opposite Lalpuri Mara Temple, <br />
                                Dariyapur, Ahmedabad - 380004,<br />
                                Gujarat.</p>
                            </div>
                    </div>
                </section>
                <section className='social-contact'>
                    <div><a href="https://www.instagram.com/parth_enterprise14/" target="_blank"><i className='fa fa-instagram'></i></a></div>
                    <div><i className='fa fa-facebook'></i></div>
                    <div><i className='fa fa-linkedin'></i></div>
                    <div><i className='fa fa-twitter'></i></div>
                </section>
            </div>
        </div>
    )
}

export default ContactUs;