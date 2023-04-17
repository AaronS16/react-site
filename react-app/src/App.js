import Navbar from './components/Navbar';
import Main from './components/Main';
import Card from './components/Card';
import Contact from './components/Contact';
import fluffy from './images/fluffykins.png';
import whiskaz from './images/mr-whiskerson.png';
import pumpkin from './images/pumpkin.png';
import felix from './images/felix.png'
import './index.css';

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Card />
      <div className='contact-cards'>
        <Contact 
          img={fluffy}
          name='Fluffykins'
          phone='(212) 555-1234' 
          email='fluff@me.com'
        />
        <Contact 
          img={whiskaz}
          name='Mr. Whiskerson'
          phone='(212) 555-2345' 
          email='mr.whiskaz@catnap.meow'
        />
        <Contact 
          img={felix}
          name='Felix'
          phone='(212) 555-4567' 
          email='thecat@me.com'
        />
        <Contact 
          img={pumpkin}
          name='Pumpkin'
          phone='(800) CAT KING' 
          email='pumpkin@king.com'
        />
      </div>
    </div>
  );
}

export default App;
