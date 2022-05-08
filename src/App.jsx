import {BrowserRouter} from 'react-router-dom';
import Router from './Routes';

import {Header, Footer} from './components/patterns'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
      <Footer />
    </BrowserRouter>
  );
}

