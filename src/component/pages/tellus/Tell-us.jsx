import './tellus.css';
import Nation from '../nation/Nation';
import Trust from '../trust/Trust';




const Tellus= () => {
    return (
        <>
        <div className="tellus">
        <video autoPlay loop muted>
      <source src="/poro.mp4" type="video/mp4" />
    </video>
            <div className="tellus-form">
                <form action="">
                <h1>Tell us what you are looking for...</h1>
                    <div className='fullname'>
                        <legend>*Full Name</legend>
                        <input type="text" />
                    </div>
                    <div className='two-div'>
                        <div>
                    <legend>*Phone Number</legend>
                        <input type="text" />
                        </div>

                        <div>
                        <legend>*Email Address</legend>
                        <input type="text" />
                        </div>
                    </div>
                    <div className='massage'>
                    <legend>*Your Massage</legend>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <a href="mailto:contact@magikworld01.com" >Send your request</a>
                </form>
            </div>
        </div>
        <Nation />
        <Trust />
        </>
    )
}

export default Tellus