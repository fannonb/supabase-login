
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Pages/loginPage';
import Success from './Pages/successPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/success" element={<Success />}/>
      </Routes>
    </Router>
  );
}

export default App;
