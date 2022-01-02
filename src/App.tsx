import { cabecalho as Header } from './components/Header/index';
import { UserArea as Section } from './components/UserArea/index';
import './App.css'

const App = () => {

  return (
    <div className="App">
      <Header />
      <Section />
    </div>
  );
}

export default App;
