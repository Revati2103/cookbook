import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Search from './pages/search/Search'
import Recipe from './pages/recipe/Recipe'

function App() {
  return (
    <div className="App">
      <BrowserRouter >
       <Routes>
          <Route exact path='/' element={<Home />} /> 
          <Route path='/create' element={<Create />} />
          <Route path='/recipe' element={<Recipe />}/>
          <Route path='/search' element={<Search />} />       
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App
