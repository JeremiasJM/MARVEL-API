import Characters from "./pages/Characters";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { DetailCharacters } from "./components/Details/DetailCharacters";
import { DetailComics } from "./components/Details/DetailComics";
import Comics from "./pages/Comics";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Mcu } from "./pages/Mcu";
import { McuDetails } from "./components/Mcu/McuDetails";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/MARVEL-API/" element={<Home />} />
          <Route path="/MARVEL-API/characters" element={<Characters />} />
          <Route path="/MARVEL-API/characters/:id" element={<DetailCharacters />} />
          <Route path="/MARVEL-API/comics" element={<Comics />} />
          <Route path="/MARVEL-API/comics/:id" element={<DetailComics />} />
          <Route path="/MARVEL-API/mcu" element={<Mcu />} />
          <Route path="/MARVEL-API/mcu/:id" element={<McuDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
