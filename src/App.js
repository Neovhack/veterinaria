import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from "./routers/AppRouter";
import {CartContext}   from "./Provider/CartContext"
import {DataContext} from "./Provider/DataContext"

function App() {
  return (
    <>
    <DataContext>
      <CartContext>
           <AppRouter />
      </CartContext>
      </DataContext>
    </>
  );
}

export default App;
