import './App.css';
import Footer from './Components/Utilis/Footer';
import NavbarItem from './Components/Utilis/NavbarItem';
import { Outlet } from 'react-router';

function App() {
  return (
    <div className="App ">
      <NavbarItem />
      <div className='min-vh-100'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
