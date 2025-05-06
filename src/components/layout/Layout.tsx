import { ReactNode } from 'react';
// import Navbar from './Navbar';
import Footer from './Footer';
import Navbar2 from './Navbar copy';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar2 />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;  