import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Header from './components/Header'
import CharacterDetails from "./pages/CharacterDetails";

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters/:id" element={<CharacterDetails />} />
      </Routes>
    </div>
  );
}

export default App;
