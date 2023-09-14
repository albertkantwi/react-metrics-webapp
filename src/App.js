import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Country from './pages/Countries';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:id" element={<Country />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
