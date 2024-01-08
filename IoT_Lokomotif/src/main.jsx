import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Dashboard from './pages/dashboard.jsx'

import { Provider } from "react-redux/es/exports";
import { store } from "./api/store.js";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Dashboard />
    </Provider>
  </React.StrictMode>,
)
