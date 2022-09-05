
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.css';
import Signup from './components/Signup';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
 <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}></Route>
    </Routes> 
    <Routes>
      <Route path="/dashboard" element={<Dashboard />}></Route>
    </Routes>
    <Routes>
        <Route path="/signup" element={<Signup />}></Route>
    </Routes>
  </BrowserRouter>
    
    </>
  );
}

export default App;
