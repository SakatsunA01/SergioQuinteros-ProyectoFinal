import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { useEffect, useState } from 'react';
import ItemListContainer from './components/ItemListContainer';
import Index from "./components/Index"
import Ninos from "./components/Ninos"
import Adultos from './components/Adultos';
import ProductDetailContainer from './components/ProductDetailContainer';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route exact path='/' element={
        <>
          <Index/>
          <ItemListContainer/>
        </>
      }/>
      <Route exact path='/Productos' element={<ItemListContainer/>} />
      <Route exact path='/category/ninos' element={<Ninos/>} />
      <Route exact path='/category/adultos' element={<Adultos/>} />
      <Route exact path='/detail/:name' element={<ProductDetailContainer/>} />
      </Routes>
    </Router>
    
  );
}

export default App;
