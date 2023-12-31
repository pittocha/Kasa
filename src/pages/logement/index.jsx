import React from 'react';
import data from '../../assets/logements.json';
import { useParams, } from 'react-router-dom';
import Collapsible from '../../components/collapse';
import '../../utils/style/logement.scss'

function Logement() {
    const { id } = useParams();
    const logement = data.find((item) => item.id === id)
    
    if (!logement) {
        return ("*");
    }
    return (
        <div>
        <h1>{logement.title}</h1>
        <div>
        <Collapsible label="Description">{logement.description}</Collapsible>
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