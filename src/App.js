import './App.css';
import Home from './pages/home';
import PageNotFound from './pages/Pagenotfound'
import Ações from './pages/acoes'
import Links from './pages/links'
import Trajetoria from './pages/trajetoria';

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Manifesto from './pages/manifesto';
import Artigos from './pages/artigos';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/acoes" element={<Ações />} />
          <Route path="/links" element={<Links />}/>
          <Route path="/trajetoria" element={<Trajetoria />} />
          <Route path="/manifesto" element={<Manifesto />} />
          <Route path="/artigos" element={<Artigos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
