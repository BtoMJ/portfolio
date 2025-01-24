import NavBar from '../../components/NavBar/Navbar.jsx';
import yo from '../../assets/me.png';
import './Home.css';
// import { hatch } from 'ldrs';
// hatch.register()

const Home = () => {

  return (
    <div className='home-container'>
     <div className='navbar-container'>
      <NavBar />
     </div>
      <div className="area" >
        <ul className="circles">
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
        </ul>
      </div>
     <div className='introduction'>
      <div className='shape-photo'>
        <img src={yo} alt='foto mía'/>
      </div>
      <h1>Hola ! Soy Daniel</h1>
      <p className='about-me'>
        Me gusta transformar ideas en experiencias visuales y digitales únicas,  <br />
        con creatividad y funcionalidad en perfecta armonía.
      </p>

      <p className='about-me'>
        Puedo llevar tus ideas al siguiente nivel para dar vida a tus proyectos. <br />
        ¡Estoy listo para crear contigo!
      </p>
     </div>
    </div>
  )
}

export default Home;