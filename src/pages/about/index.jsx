import '../../utils/style/about.scss';
import banderolle from '../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png';
import Collapsible from '../../components/collapse';

function About() {  
    return (
      <div >
        <div className='banner'>
        <img src={banderolle} className='banner-img' alt='bannière' />
      </div>
      <Collapsible label="Fiabilité">
      <p>
        Les annonces postées sur Kasa garantissent une fiabilité totale. Lesphotos sont conformes aux logements,
         et toutes les informations sont régulièrement vérifiées par nos équipes.
      </p>
      </Collapsible>
      <Collapsible label="Respect">
      <p>
        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement 
        discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme. 
      </p>
      </Collapsible>
      <Collapsible label="Service">
      <p>
        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement 
        discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme. 
      </p>
      </Collapsible>
      <Collapsible label="Sécurité">
      <p>
        La sécurité est la priorité de Kasa . aussi bien pour nos hôtes que pour les 
        voyageurs,chaques logement correspond aux critères de sécurité établis par nos services. 
        En laissant une note aussi bien à l'hôte qu'aux locataires, cela permet à nos équipes de 
        vérifier que les standart sont bien respectés. Nous organisons également des ateliers 
        sur la sécurité domestique pour nos hôtes.
      </p>
      </Collapsible>
      </div>
    )
  }
  
  export default About;