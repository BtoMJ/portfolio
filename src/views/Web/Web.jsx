import NavBar from '../../components/NavBar/Navbar.jsx';
import ItemWeb from '../../components/ItemWeb/ItemWeb.jsx';
import './Web.css';

const Web = () => {

    return(
        <>

            <div className='navbar-container'>
                <NavBar active="web"/>
            </div>
            
            <div className="web-container">
                <h2>Algunos de mis desarrollos</h2>
                <p className='web-text'>
                    Sitios web funcionales, modernos y personalizados, <br/>
                    adaptados a las necesidades de cada proyecto.
                </p>
                <ItemWeb 
                    title = "Búsqueda de Películas"
                    description = " Sitio para buscar películas y series por nombre."
                    photo = "web1"
                    type = {1}
                    />
                <ItemWeb 
                    title = "Búsqueda de Películas"
                    description = " Sitio para buscar películas y series por nombre."
                    photo = "web1"
                    type = {2}
                />
                <ItemWeb 
                    title = "Búsqueda de Películas"
                    description = " Sitio para buscar películas y series por nombre."
                    photo = "web1"
                    type = {1}
                />
            </div>

        </>
    )
}

export default Web;