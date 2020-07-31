import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
// import
// 'mdbreact/dist/css/mdb.css';
import React from 'react';
import { Link } from 'react-router-dom';


import Routes from './routes/Routes';
//import logo from './logo.svg';
import './App.css';
import '../src/assets/css/responsive.css';
import '../src/assets/css/style.css';

function App() {
  return (
    <div>
      

      <Routes />
    </div>
  );
}

export default App;
