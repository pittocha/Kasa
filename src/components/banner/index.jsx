import Bannière from '../../assets/IMG.png'
import '../../utils/style/banner.scss'


function Banner() {

    return (
        <div className='banner'>
            <img src={Bannière} className='banner-img' alt='bannière' />
            <div className='banner-title'>Chez vous, partout et ailleurs</div>
        </div>
        )
}

export default Banner