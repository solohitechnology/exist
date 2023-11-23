import './contact.css'
import Mymap from '../mymap/Mymap'




const Contact = () => {
    return(
        <>
        <div className="contact-div">
            <div className="contact-text">
             <h1>GET IN TOUCH</h1>
             <p>We'd love to here from you. Here's how you can reach us... </p>
            </div>
            <div className="contact-img">
            <img src="/contact.jpg" alt="" />
            </div>
        </div>

        <div className="info-div1">
            
            <div className="map-div">
                <Mymap />
            </div>

            <div className="form-div">
                <h1>Send us a massage</h1>
            <form action="">
                <input type="text" placeholder='Full Name' />
                <input type="text" placeholder='Email' />
                <textarea name="" id="" cols="30" rows="10" placeholder='Massage' ></textarea>
                <li><a href="mailto:contact@magikworld01.com"> Submit</a></li>
            </form>
            </div>

        </div>
        </>
    )
}

export default Contact