import './App.css';
import Home from './pages/home';
import PageNotFound from './pages/Pagenotfound'
import HomeMaterias from './pages/materias'

import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/materias" element={<HomeMaterias />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
