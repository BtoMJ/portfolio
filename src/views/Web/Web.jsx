import NavBar from '../../components/NavBar/Navbar.jsx';
import Item from '../../components/Item/Item.jsx';
import './Web.css';

const Web = () => {

    return(
        <>

            <div className='navbar-container'>
                <NavBar active="web"/>
            </div>
            
            <div className="web-container">
                <Item 
                    title = "Búsqueda de Películas"
                    description = " Sitio para buscar películas y series por nombre."
                    photo = "web1"
                    type = {1}
                    />
                <Item 
                    title = "Búsqueda de Películas"
                    description = " Sitio para buscar películas y series por nombre."
                    photo = "web1"
                    type = {2}
                />
                <Item 
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