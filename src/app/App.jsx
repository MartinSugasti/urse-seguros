import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsappIcon from './components/WhatsappIcon';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/home';
import About from './pages/about';
import Cotizacion from './pages/cotizacion';
import Viaje from './pages/viaje';
import Motos from './pages/motos';

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Navbar />

    <Routes>
      <Route exact path="/about" element={<About />} />
      <Route exact path="/cotizacion" element={<Cotizacion />} />
      <Route exact path="/viaje" element={<Viaje />} />
      <Route exact path="/motos" element={<Motos />} />
      <Route path="/*" element={<Home />} />
    </Routes>

    <Footer />
    <WhatsappIcon />
  </BrowserRouter>
);

export default App;
