import NavBar from '../../components/NavBar/Navbar.jsx';
import './Web.css';

const Web = () => {

    return(
        <>

            <div className='navbar-container'>
                <NavBar active="web"/>
            </div>
            
            <div className="web-container">
                web
            </div>

        </>
    )
}

export default Web;