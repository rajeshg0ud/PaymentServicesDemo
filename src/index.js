import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import Store from './Store/Store';
import AppRouter from './App';
import { RouterProvider } from 'react-router-dom';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import './index.css'

const App = () => {
  return (
    <Provider store={Store}>
       <PayPalScriptProvider deferLoading={true}>
        <RouterProvider router={AppRouter} />
      </PayPalScriptProvider>
    </Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
