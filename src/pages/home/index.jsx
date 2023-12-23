import '../../utils/style/index.scss';
import Banner from '../../components/banner';
import Card from '../../components/Card';
import data from '../../assets/logements.json';

function Home() {
  return (
    <div>
    <Banner />
    <div className='gallery'>
      {data.map((item) => (
      <Card key={item.id} title={item.title} cover={item.cover} />
      ))}
    </div>
    </div>
  );
}

export default Home;
