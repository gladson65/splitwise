import Home from './components/Home';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Provider } from 'react-redux';
import splitStore from './utils/splitStore.js';
import './App.css';

function App() {

  return (
    <>
      <Provider store={splitStore}>
      <GoogleOAuthProvider clientId='209290256480-2hfgfa7rb1vf6oeoktdossm5r2lohe4o.apps.googleusercontent.com'>
        <Header />
        <Outlet />
      </GoogleOAuthProvider>
      </Provider>
    </>
  )
}

export default App
