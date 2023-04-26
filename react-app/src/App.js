import Navbar from './components/Navbar';
import Main from './components/Main';
import Card from './components/Card';
import data from './data';
import './index.css';

const App = () => {
  const cardData = data.map((card) =>
    <Card
      photo={card.coverImg}
      rating={card.stats.rating}
      reviewCount={card.stats.reviewCount}
      location={card.location}
      title={card.title}
      price={card.price}
    />
  )
  return (
    <div>
      <Navbar />
      <Main />
      {cardData}
    </div>
  );
}

export default App;
