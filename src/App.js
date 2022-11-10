import { Route, Routes } from "react-router-dom";
import Home from './pages/HomePage';
import Header from './components/Header'
import Footer from './components/Footer'
import CharacterDetails from "./pages/CharacterDetailsPage";

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters/:id" element={<CharacterDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
