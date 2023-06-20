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
          <Route path="/MARVEL-API" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/characters/:id" element={<DetailCharacters />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="/comics/:id" element={<DetailComics />} />
          <Route path="/mcu" element={<Mcu />} />
          <Route path="/mcu/:id" element={<McuDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
