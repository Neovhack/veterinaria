
import './App.css';
import CardListPokemon from "./components/ItemlistContainer/CardListPokemon"
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemlistContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardList from './components/ItemlistContainer/CardList';

function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer saludo="Bienvenido!"/>
    <CardListPokemon/>
    </>
  );
}

export default App;
