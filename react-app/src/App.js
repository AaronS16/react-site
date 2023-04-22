import Navbar from './components/Navbar';
import Main from './components/Main';
import Card from './components/Card';
import katie_zaferes from './images/katie-zaferes.png'
import './index.css';

const App = () => {
  const nums = ['alice', 'bob', 'charlie', 'danielle']
  return (
    <div>
      <Navbar />
      <Main />
      <Card 
        photo={katie_zaferes}
        rating={5.0}
        reviewCount={6}
        country='USA'
        title="Life lessons with Katie Zaferes"
        price={136}
        map={nums.map((el) => `<p>${el}</p>`)}
      />
    </div>
  );
}

export default App;
