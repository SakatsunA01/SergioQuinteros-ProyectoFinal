import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import ItemListContainer from './components/ItemListContainer';
import Index from "./components/Index"
import ProductDetailContainer from './components/ItemDetailContainer';
import CartProvider from './context/CartContext';
import Cart from './components/Cart';
import Login from './components/Login';



function App() {
  return (
    <Router>
      <CartProvider>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={
            <>
              <Index/>
              <ItemListContainer/>
            </>
          }/>
          <Route exact path='/Productos' element={<ItemListContainer/>} />
          <Route exact path='/:categoryname' element={<ItemListContainer/>} />
          <Route exact path='/detail/:detalleId' element={<ProductDetailContainer/>} />
          <Route exact path='/cart' element={<Cart/>} />
          <Route exact path='/login' element={<Login/>}/>
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
