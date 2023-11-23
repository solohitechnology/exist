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
                        <li><a href="https://web.facebook.com/p/magikworld01-100054804818634/?locale=gl_ES&paipv=0&eav=AfbKgB0da7MvdJqeCW9oUDg37FImieKJ7m73nt_M4kq6iRdIWB1fLpZjgKyt7p8UiWY&_rdc=1&_rdr">
                     <FaFacebook className='facebook' />                            
                            </a></li>
                            <li><a href="https://www.instagram.com/magikworld01/?hl=en">
                     <FaInstagram className='instagram' />
                                </a></li>

                                <li><a href=" https://wa.me/2347031994159 ">
                     <FaWhatsapp className='whatsapp' />
                                    </a></li>
                    </div>

                </div>

                <div className="footer-links">
                    <div className='links'>
                        <h3>Links</h3>
                    <ul>
                        <li><a href="/"> Home </a></li>
                        <li><a href="/"> About us </a></li>
                        <li><a href="/"> Gift Cataloge </a></li>
                        <li><a href="/"> Contact us </a></li>
                    </ul>
                    </div>

                    <div className='links'>
                        <h3 >Community</h3>
                    <ul>
                        <li><a href="/"> Event </a></li>
                        <li><a href="/"> Blog </a></li>
                        <li><a href="/"> Podcast </a></li>
                    </ul>
                    </div>

                    <div className='links'>
                        <h3  >Socials</h3>
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