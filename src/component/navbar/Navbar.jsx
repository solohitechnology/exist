
import './navbar.css'


const Navbar = () => {

    return (
        <>
        <div className='nav-bar'>
            <div className='logo-div'>
                <img src="/logo.jpg" alt="magikworld" />
            </div>
            <div className='links-div'>
                <ul className='links'>
                    <li> <a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/gift-catarlogue">Gift Catarlogue</a></li>
                    <li><a href=""> Contact us</a></li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Navbar