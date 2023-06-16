import Characters from "./pages/Characters";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { DetailCharacters } from "./components/Characters/DetailCharacters";
import { DetailComics } from "./components/Comics/DetailComics";
import Comics from "./pages/Comics";
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer'

const App= ()=> {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/characters/:id" element={<DetailCharacters />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="/comics/:id" element={<DetailComics />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;