import '../../utils/style/index.scss';
import React from 'react';
import Banner from '../../components/banner';
import image1 from '../../assets/IMG.png';
import Card from '../../components/Card';
import data from '../../assets/logements.json';
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
    <Banner imageUrl={image1} title='Chez vous, partout et ailleurs' />
    <div className='gallery'>
      {data.map((item) => (
      <Link key={item.id} to={`/logement/${item.id}`}>
      <Card title={item.title} cover={item.cover} />
      </Link>
      ))}
    </div>
    </div>
  );
}

export default Home;
