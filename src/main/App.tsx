import { BrowserRouter } from 'react-router-dom';
import Router from '../main/Routes';
import SessionProvider from '../hooks/sessionProvider';

import { Header, Footer } from '../components/patterns';

export default function App() {
  return (
    <SessionProvider>
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </SessionProvider>
  );
}
