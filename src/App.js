import './App.css';
import About from './components/About';
import myPic from './mypic.jpg'
import Footer from './components/Footer';
import Info from './components/Info';

function App() {
  return (
    <div className="App">
      <h1>My Digital Card</h1>
      <div className='card'>
      <img src={myPic} className="image"/>
        <Info />
        <About />
        <Footer />
      </div>
    </div>
  );
}

export default App;
