import NavBar from '../../components/NavBar/Navbar.jsx';
import './Home.css';
// import { hatch } from 'ldrs';
// hatch.register()

const Home = () => {

  return (
    <>
     <div className='navbar-container'>
      <NavBar />
     </div>
     <div className='introduction'>
      <h1>Hola !</h1>
      <p>Mi nombre es Daniel</p>
     </div>
    </>
  )
}

export default Home;