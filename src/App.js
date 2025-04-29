import './App.css';
import { Header } from './components/Header/Header';
import { Timer } from './components/Timer/Timer';
import { Advantages } from './sections/Advantages/Advantages';
import { Footer } from './sections/Footer/Footer';
import { Intro } from './sections/Intro/Intro';
import { Leaders } from './sections/Leaders/Leaders';
import { Statistic } from './sections/Statistic/Statistic';
import { Table } from './sections/Table/Table';

function App() {
  return (
    <div className="App">
      <Header/>
      <Intro/>
      <Leaders/>
      {/* <Timer/> */}
      <Table/>
      <Advantages/>
      <Statistic/>
      <Footer/>
    </div>
  );
}

export default App;
