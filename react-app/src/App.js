import Navbar from './components/Navbar';
import Main from './components/Main';
import Card from './components/Card';
import Contact from './components/Contact';
import './index.css';

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Card />
      <div className='contact-cards'>
        <Contact />
        <Contact />
        <Contact />
        <Contact />
      </div>
    </div>
  );
}

export default App;
