
import { useEffect,useState } from 'react';
import './App.css';
import { useParams } from 'react-router-dom';
import { getbot } from './Utilities';
import Displaybot from './components/Displaybots';
import { Outlet,useNavigate } from 'react-router-dom';

function App() {

  
  

  return (
    <Displaybot />
  );
}

export default App;
