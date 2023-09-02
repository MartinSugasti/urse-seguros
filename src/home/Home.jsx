import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './sections/shared/Navbar';
import Main from './sections/main/Main';
import About from './sections/about/About';
import Cotizacion from './sections/cotizacion/Cotizacion';
import Footer from './sections/shared/Footer';
import WhatsappIcon from './sections/shared/WhatsappIcon';
import ScrollToTop from './sections/shared/ScrollToTop';

const Home = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Navbar />

    <Routes>
      <Route exact path="/about" element={<About />} />
      <Route exact path="/cotizacion" element={<Cotizacion />} />
      <Route path="/*" element={<Main />} />
    </Routes>

    <Footer />
    <WhatsappIcon />
  </BrowserRouter>
);

export default Home;
