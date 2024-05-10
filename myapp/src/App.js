import './App.css';
import Login from './components/login';

import Home from './components/home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Userpage from './components/userpage';


function App() {

  return (
    <div className="App">
       <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/userpage" element={<Userpage />} />
       
      </Routes>
    </Router>
     
    </div>
  );
}

export default App;
