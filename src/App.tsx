
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Animal } from './components/pages/Animal';
import { Animals } from './components/pages/Animals';
import { Home } from './components/pages/Home';
import { Layout } from './components/pages/Layout';
import { NotFound } from './components/pages/NotFound';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}></Route>
          <Route path='/animals' element={<Animals/>}></Route>
          <Route path='/animal/:id' element={<Animal/>}></Route>
          <Route path='/*' element={<NotFound/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
