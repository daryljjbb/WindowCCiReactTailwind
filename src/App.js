import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/header';
import Home from "./components/Home/home";
import About from './components/About/about';
import Login from './components/Login/login';
import Contact from './components/Contact/contact';
import Demo from './components/Demo/demo';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="demo" element={<Demo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

