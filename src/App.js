import React from "react";
import  {Routes,Route, Form} from 'react-router-dom';
import Footer from "./pages/footer";
import Header from "./pages/header";
import Home from "./pages/home";
import './App.css'
import About from "./pages/about";
import Contact from "./pages/contact";
import News from "./pages/news";
import Formlogin from "./pages/formLogin";
function App() {
  return (
    <div>
       <Header/>
      <Routes>
      <Route path="/" element={<About/>}/>
      <Route path="news" element={<News/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="formlogin" element={<Formlogin/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
