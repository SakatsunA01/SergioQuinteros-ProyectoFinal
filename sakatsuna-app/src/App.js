import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { useEffect, useState } from 'react';
import ItemListContainer from './components/ItemListContainer';
import Index from "./components/Index"
import ProductoDetalle from './components/ProductDetail';

function App() {
  const [esto, setEsto] = useState([])
    useEffect(()=>{
        const url = "./data.json"
        fetch(url)
            .then((res)=> res.json())
            .then((data)=>setEsto(data.remeras))
            .catch((err)=> console.log(err))
    },[])
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
      <Route exact path='/Productos' element={<ItemListContainer/>}/>
      <Route exact path='/category/ninos' element={<ItemListContainer/>}/>
      <Route exact path='/category/adultos' element={<ItemListContainer/>}/>
      <Route exact path='/detail/:id' element={
      <ProductoDetalle data={esto}/>
      }/>

      </Routes>
    </Router>
    
  );
}

export default App;
