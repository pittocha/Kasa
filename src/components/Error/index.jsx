import '../../utils/style/Error.scss'
import { Link } from 'react-router-dom'

function Error () {

    return(
        <div className='ErrorWrapper'>
            <h1 className='error-404'>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className='homeLink'>Retourner sur la page d'acceuil</Link>
        </div>
    )
}

export default Error