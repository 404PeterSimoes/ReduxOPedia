import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Header from './layout/Header';
import Footer from './layout/Footer';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1">Main Content</main>
      <Footer />
    </div>
  </StrictMode>,
);
