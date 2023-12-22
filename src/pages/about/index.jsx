import React, { useState } from 'react';
import '../../utils/style/about.scss';
import banderolle from '../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png';
import arrow from '../../assets/arrow_back_ios-24px 2.png';

function About() {
    const [isOpenFiabilite, setIsOpenFiabilite] = useState(false);
    const [arrowDirectionFiabilite, setArrowDirectionFiabilite] = useState('up');
    const [isOpenRespect, setIsOpenRespect] = useState(false);
    const [arrowDirectionRespect, setArrowDirectionRespect] = useState('up');
    const [isOpenService, setIsOpenService] = useState(false);
    const [arrowDirectionService, setArrowDirectionService] = useState('up');
    const [isOpenSecurite, setIsOpenSecurite] = useState(false);
    const [arrowDirectioSecurite, setArrowDirectionSecurite] = useState('up');

    const toggleArrowDirectionFiabilite = () => {
      setArrowDirectionFiabilite(arrowDirectionFiabilite === 'up' ? 'down' : 'up');
    };
    const toggleArrowDirectionRespect = () => {
      setArrowDirectionRespect(arrowDirectionRespect === 'up' ? 'down' : 'up');
    };
    const toggleArrowDirectionService = () => {
      setArrowDirectionService(arrowDirectionService === 'up' ? 'down' : 'up');
    };
    const toggleArrowDirectionSecurite = () => {
      setArrowDirectionSecurite(arrowDirectioSecurite === 'up' ? 'down' : 'up');
    };
  
    return (
      <div >
        <div className='banner'>
        <img src={banderolle} className='banner-img' alt='bannière' />
      </div>
        <div className='section-header'> 
        <h2 className='section-titie'>Fiabilité</h2>
        <button className={`toggle-button ${arrowDirectionFiabilite}`} onClick={() => {toggleArrowDirectionFiabilite(); setIsOpenFiabilite(!isOpenFiabilite)}}>
          <img src={arrow} alt='flèche' />
        </button>
        </div>
        {isOpenFiabilite && (
          <p className='section-content'>
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        )}
        <div className='section-header'> 
        <h2 className='section-titie'>Respect</h2>
        <button className={`toggle-button ${arrowDirectionRespect}`} onClick={() => {toggleArrowDirectionRespect();setIsOpenRespect(!isOpenRespect)}}>
          <img src={arrow} alt='flèche' />
        </button>
        </div>
        {isOpenRespect && (
          <p className='section-content'>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement 
            discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme. 
          </p>
        )}
        <div className='section-header'> 
        <h2 className='section-titie'>Service</h2>
        <button className={`toggle-button ${arrowDirectionService}`} onClick={() => {toggleArrowDirectionService();setIsOpenService(!isOpenService)}}>
          <img src={arrow} alt='flèche' />
        </button>
        </div>
        {isOpenService && (
          <p className='section-content'>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement 
            discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme. 
          </p>
        )}
        <div className='section-header'> 
        <h2 className='section-titie'>Sécurité</h2>
        <button className={`toggle-button ${arrowDirectioSecurite}`} onClick={() => {toggleArrowDirectionSecurite();setIsOpenSecurite(!isOpenSecurite)}}>
          <img src={arrow} alt='flèche' />
        </button>
        </div>
        {isOpenSecurite && (
          <p className='section-content'>
            La sécurité est la priorité de Kasa . aussi bien pour nos hôtes que pour les 
            voyageurs,chaques logement correspond aux critères de sécurité établis par nos services. 
            En laissant une note aussi bien à l'hôte qu'aux locataires, cela permet à nos équipes de 
            vérifier que les standart sont bien respectés. Nous organisons également des ateliers 
            sur la sécurité domestique pour nos hôtes.
          </p>
        )}
      </div>
    )
  }
  
  export default About;