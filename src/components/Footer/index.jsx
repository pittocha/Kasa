import '../../utils/style/Footer.scss';
import FooterLogo from '../../assets/LogoFooter.png'

function Footer () {

    return (
        <div className='FooterContainer'>
            <img src={FooterLogo} className='FooterLogo' alt='logo kasa blanc' />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer