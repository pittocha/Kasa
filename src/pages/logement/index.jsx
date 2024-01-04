import React from 'react';
import data from '../../assets/logements.json';
import { useParams, Navigate } from 'react-router-dom';
import Collapsible from '../../components/collapse';
import Caroussel from '../../components/caroussel';
import '../../utils/style/logement.scss'

function Logement() {
    const { id } = useParams();
    const logement = data.find((item) => item.id === id)
    
    if (!logement) {
        return <Navigate to='*' />;
    }
    return (
        <div>
        <div className='caroussel'>
            <Caroussel pictures={logement.pictures} />
        </div>
        <h1 className='logement-title'>{logement.title}</h1>
        <div className='location'>{logement.location}</div>
        <div className='tags'>
        {logement.tags}
        </div>
        <div className='deroulant'>
        <Collapsible label="Description" width="45%">{logement.description}</Collapsible>
        <Collapsible label="Équipements">
        <ul>
            {logement.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
            ))}
        </ul>
        </Collapsible>
        </div>
        </div>
    )
}

export default Logement