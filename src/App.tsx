import React from 'react';
import ReactDOM from 'react-dom';

import './main/index.css';
import 'toastr/build/toastr.min.js';
import 'toastr/build/toastr.css';
import App from './main/App';
import { RefreshContextProvider } from './context/RefreshContextDND';

ReactDOM.render(
  <React.StrictMode>
    <RefreshContextProvider>
      <App />
    </RefreshContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
