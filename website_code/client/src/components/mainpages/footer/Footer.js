import React from "react";
import Logo from '../../headers/icon/full_logo.png';

function Footer() {
    return (
        <footer>
            <div className="footer">
                <div className="footer_logo"><img alt="Logo" src={Logo} />
                    <p>Ethically made just for you.</p>
                </div>
                <div className="">

                </div>
                <div className="contact-us">
                    <p><i className="fas fa-phone"></i>+91 886-601-9607</p>
                    <p><i className="fa fa-instagram"></i><a href="https://www.instagram.com/parth_enterprise14/" target="_blank">@parth_enterprise14</a></p>
                    <p><i className="fa fa-map-marker-alt"></i>Parth Enterprise,<br />
                        1493/10/S Dariyapur Gate,<br />
                        Opposite Lalpuri Mara Temple, <br />
                        Dariyapur, Ahmedabad - 380004,<br />
                        Gujarat.</p>
                </div>
            </div>
            <p style={{ textAlign: 'center', color: 'white', background: '#081c20', margin: '0', padding: '20px' }}>All rights reserved. Copyright &copy; 2022. Designed and Developed by <a href="https://www.linkedin.com/in/neha-thakkar-785a901b8/">Neha Thakkar</a></p>
        </footer>
    )
}

export default Footer;
