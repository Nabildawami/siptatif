import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './page/header.tsx'; 
import Sidebar from './page/sidebar.tsx'; 
import Login from './page/Login.tsx';
import Register from './page/Register.tsx';
import Home from './page/Home.tsx';
import Pembimbing from './page/pembimbing';
import Pendaftaran from './page/pendaftaran';
import Status from './page/status';

const App = () => {
  return (
    <Router>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Pembimbing" element={<Pembimbing />} />
        <Route path="/Pendaftaran" element={<Pendaftaran />} />
        <Route path="/Status" element={<Status />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
