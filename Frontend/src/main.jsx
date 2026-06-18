import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ProductProvider from './context/ProductContext.jsx'
import { ToastContainer } from 'react-toastify'
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from './ErrorFallback.jsx'
import {Provider} from "react-redux"
import { persistor, store } from './App/Store.js'
import { PersistGate } from 'redux-persist/integration/react'

createRoot(document.getElementById('root')).render(

 <Provider store={store}>
  <PersistGate  persistor={persistor}>
  <BrowserRouter>
  <ProductProvider>
    <ErrorBoundary FallbackComponent={ErrorFallback} >
    <App />
  <ToastContainer />
    </ErrorBoundary>
  </ProductProvider>
  </BrowserRouter>
  </PersistGate>

  </Provider>
  ,
)
