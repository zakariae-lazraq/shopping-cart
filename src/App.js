import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Card from "./pages/card";
import Header from "./components/header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card" element={<Card />} />
      </Routes>
    </div>
  );
}

export default App;
