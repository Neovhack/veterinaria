import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from "./routers/AppRouter";
import {CartContext}   from "./Provider/CartContext"

function App() {
  return (
    <>
      <CartContext>
           <AppRouter />
      </CartContext>
    </>
  );
}

export default App;
