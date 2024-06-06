import './sidebar.css';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul className="nav-menu">
        <li className="nav-item">
          <NavLink to="/Home" >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Pendaftaran">Pendaftaran</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Pembimbing">Pembimbing</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Status" >Status</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
