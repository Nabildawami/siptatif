import Sidebar from './sidebar.tsx';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <Sidebar />
      <div className="home-content">
        <h1 className="title">pendaftaran Page</h1>
        <p>Welcome to the home page!</p>
      </div>
    </div>
  );
};

export default Home;

