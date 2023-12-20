import logo from '../../assets/Logo.png'
import { Link } from 'react-router-dom'

function Header () {

    return [
        <div className='navContainer'>
            <Link to="/">
                <img src={logo} className='logo' alt='logo kasa' />
            </Link>
            <div>
                <Link to="/" className='navLink'>Acceuil</Link>
                <Link to="/About" className='navLink'>A Propos</Link>
            </div>
        </div>
    ]
}

export default Header