import '../../utils/style/about.scss';
import React from 'react';
import image2 from '../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png'
import Collapsible from '../../components/collapse';
import Banner from '../../components/banner';

function About() {  
    return (
      <div >
        <Banner imageUrl={image2} title='' />
      <div>
      <Collapsible label="Fiabilité" width="80%">
        Les annonces postées sur Kasa garantissent une fiabilité totale. Lesphotos sont conformes aux logements,
         et toutes les informations sont régulièrement vérifiées par nos équipes.
      </Collapsible>
      <Collapsible label="Respect">
        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement 
        discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme. 
      </Collapsible>
      <Collapsible label="Service">    
      La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement 
      discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.  
      </Collapsible>
      <Collapsible label="Sécurité">
        La sécurité est la priorité de Kasa . aussi bien pour nos hôtes que pour les 
        voyageurs,chaques logement correspond aux critères de sécurité établis par nos services. 
        En laissant une note aussi bien à l'hôte qu'aux locataires, cela permet à nos équipes de 
        vérifier que les standart sont bien respectés. Nous organisons également des ateliers 
        sur la sécurité domestique pour nos hôtes.
      </Collapsible>
      </div>
      </div>
    )
  }
  
  export default About;