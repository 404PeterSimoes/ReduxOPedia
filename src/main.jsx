import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Header from './layout/Header';
import Footer from './layout/Footer';
import { store } from './store/store';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <main className="flex-grow-1">Main Content</main>
        <Footer />
      </div>
    </Provider>
  </StrictMode>,
);
