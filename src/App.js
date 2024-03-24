import './App.css';
import HomePage from './components/Homepage';
import Easy from './components/Easy';
import Medium from './components/Medium';
import Hard from './components/Hard';
import Highscores from './components/Highscores';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/easy' element={<Easy />} />
      <Route path='/medium' element={<Medium />} />
      <Route path='/hard' element={<Hard />} />
      <Route path='/high_scores' element={<Highscores />} />
    </Routes>
  );
}

export default App;
