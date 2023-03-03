import * as React from 'react';
import { Link, Route, Router, Routes} from 'react-router-dom';
import Home from './component/Home';
import Game from './component/Game';
import About from './component/About';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/about" element={<About />} />
      </Routes>

  );
}




export default App;
