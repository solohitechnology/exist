import './footer.css';
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaWhatsapp,
    FaLinkedinIn,
    FaTiktok,
    FaTelegramPlane,
    FaPhone,
    FaEnvelope,
  } from "react-icons/fa";


const Footer = () => {
    return (

        <footer>
             <div className="footer">
                <div className="info-div">

                    <img src="/logo.png" alt="magikworld" />
                    <p>Our vision is to provide conveniece and spread a little bit of happiness</p>
                    <div className="social-icon">
                        <li><a href="/">
                     <FaFacebook className='facebook' />                            
                            </a></li>
                            <li><a href="/">
                     <FaInstagram className='instagram' />
                                </a></li>

                                <li><a href="/">
                     <FaWhatsapp className='whatsapp' />
                                    </a></li>
                    </div>

                </div>

                <div className="footer-links">
                    <div className='links'>
                        <h2>Links</h2>
                    <ul>
                        <li><a href="/"> Home </a></li>
                        <li><a href="/"> About us </a></li>
                        <li><a href="/"> Gift Cataloge </a></li>
                        <li><a href="/"> Contact us </a></li>
                    </ul>
                    </div>

                    <div className='links'>
                        <h2>Community</h2>
                    <ul>
                        <li><a href="/"> Event </a></li>
                        <li><a href="/"> Blog </a></li>
                        <li><a href="/"> Podcast </a></li>
                    </ul>
                    </div>

                    <div className='links'>
                        <h2>Socials</h2>
                    <ul>
                        <li><a href="/"> Instagram </a></li>
                        <li><a href="/"> Twitter </a></li>
                        <li><a href="/"> Facebook </a></li>
                    </ul>
                    </div>
                </div>
             </div>
           <div className='footer-lower'>
            <div className='last-links'>
                <li><a href="/">Privacy & Policy </a></li>
                <li><a href="/">Terms & Condition</a></li>
            </div>
            <p className='copy' >&copy;2023 MagikWorld01.com All rights reserved</p>
           </div>
        </footer>
    )
}

export default Footer