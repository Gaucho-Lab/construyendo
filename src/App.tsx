import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import LoansPage from './pages/LoansPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ui/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/construyendo" element={<HomePage />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/prestamos" element={<LoansPage />} />
          <Route path="/contacto" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;