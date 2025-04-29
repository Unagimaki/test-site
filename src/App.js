import './App.css';
import { Header } from './components/Header/Header';
import { Timer } from './components/Timer/Timer';
import { Advantages } from './sections/Advantages/Advantages';
import { Footer } from './sections/Footer/Footer';
import { Intro } from './sections/Intro/Intro';
import { Leaders } from './sections/Leaders/Leaders';
import { Statistic } from './sections/Statistic/Statistic';
import { Table } from './sections/Table/Table';
import { Link, Element } from 'react-scroll'

function App() {
  return (
    <div className="App">
      <Header/>
      <Element name='Intro'>
        <Intro/>
      </Element>
      <Element name="Leaders">
        <Leaders />
      </Element>

      <Element name="Trades">
        <Table />
      </Element>

      <Element name="Advantages">
        <Advantages />
      </Element>

      <Element name="Stats">
        <Statistic />
      </Element>
      <Footer/>
      <Timer/>
    </div>
  );
}

export default App;
