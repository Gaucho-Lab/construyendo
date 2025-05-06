import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import LoansPage from './pages/LoansPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ui/ScrollToTop';
import AsociatePage from './pages/AsociatePage';
import Proveeduria from './pages/Services/Proveeduria';
import Turismo from './pages/Services/Turismo';
import Electrodomesticos from './pages/Services/Electrodomesticos';
import Construccion from './pages/Services/Construccion';
import Asistencia from './pages/Services/Asistencia';
import Patrimoniales from './pages/Services/Patrimoniales';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/construyendo" element={<HomePage />} />
          <Route path="/servicios" element={<ServicesPage />} />
            <Route path="/servicios/proveeduria" element={<Proveeduria />} />
            <Route path="/servicios/electrodomesticos" element={<Electrodomesticos />} />
            <Route path="/servicios/turismo" element={<Turismo />} />
            <Route path="/servicios/asistencia" element={<Asistencia />} />
            <Route path="/servicios/construccion" element={<Construccion />} />
            <Route path="/servicios/prestamos-personales" element={<LoansPage />} />
            <Route path="/servicios/seguros-patrimoniales" element={<Patrimoniales />} />
          <Route path="/asociate" element={<AsociatePage />} />
          <Route path="/contacto" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;