import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./components/Auth/Login";
import { Register } from "./components/Auth/Register";
import {Articles} from './components/Articles/Articles';
import { CropSuggetion } from "./components/CropSuggetion/CropSuggetion";
import {Products} from './components/Products/Products';
import { Videos } from "./components/Videos/Videos";
import { PlayArticle } from "./components/Play/PlayArticle";
import {PlayVid } from './components/Play/PlayVid';
import { PlayProduct } from "./components/Play/PlayProduct";
import Home from './components/Home/Home';
import About_rest from './components/About/About_rest';
import Services from './components/Service/Services';
import Contact from './components/Contact/Contact';
import Bot from './components/Bot/Bot';

function App() {
  return (
    <>
        <BrowserRouter>
        <Bot/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About_rest/>} />
            <Route path="/serv" element={<Services/>} />
            <Route path="/cont" element={<Contact/>} />

            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />

            <Route path="/article" element={<Articles/>} />
            <Route path="/article/:id" element={<PlayArticle/>} />
            <Route path="/video"  element={<Videos/>}/>
            <Route path="/video/:id" element={ <PlayVid/> } />
            <Route path="/product" element={ <Products/> } />
            <Route path="/product/:id" element={ <PlayProduct/> } />
            <Route path="/cropsuggestion" element={<CropSuggetion/>} />
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
