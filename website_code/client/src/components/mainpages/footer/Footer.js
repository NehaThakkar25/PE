import React from "react";
import Logo from '../../headers/icon/full_logo.png';

function Footer(){
    return(
        <footer className="footer">
                <div className="footer_logo"><img alt="Logo" src={Logo}/>
                    <p>Ethically made just for you.</p>
                </div>
                <div className="">

                </div>
                <div className="contact-us">
                    <p><i className="fas fa-phone"></i>+91 886-601-9607</p>
                    <p><i className="fa fa-instagram"></i><a href="https://www.instagram.com/parth_enterprise14/" target="_blank">@parth_enterprise14</a></p>
                    <p><i className="fa fa-map-marker-alt"></i>Parth Enterprise,<br/>
                    Color Box,<br />
                    1493/10/S Dariyapur Gate,<br />
                    Opposite Lalpuri Mara Temple, <br />
                    Dariyapur, Ahmedabad - 380004,<br />
                    Gujarat.</p>
                </div>
        </footer>
    )
}

export default Footer;