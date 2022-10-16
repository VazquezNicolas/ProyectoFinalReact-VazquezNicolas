import './App.css';
import Navbar from './components/Navbar/NavbarJSX';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom' //


function App() {

  return (
    <div className='container'>
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes> {/*Dentro de Routs van los componentes que no se van a mostrar siempre*/}
          <Route path='/' element={<ItemListContainer />}/>  
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/detail/:productId' element={ <ItemDetailContainer />}/> 
          <Route path='*' element={<h1>404 NOT FOUND</h1>} />
        </Routes>

      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
