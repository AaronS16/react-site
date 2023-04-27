import Navbar from './components/Navbar';
import Main from './components/Main';
import Card from './components/Card';
import data from './data';
import './index.css';

const App = () => {
  const cardData = data.map((item) =>
    <Card
      key={item.id}
      item={item}
    />
  )
  return (
    <div>
      <Navbar />
      <Main />
      <section className='cards-list'>
        {cardData}
      </section>
    </div>
  );
}

export default App;
