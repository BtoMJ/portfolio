import NavBar from '../../components/NavBar/Navbar.jsx';
import ItemWeb from '../../components/ItemWeb/ItemWeb.jsx';
import webWork from '../../data/works-webs.json';
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
                <div className='web-works'>
                    {
                        webWork && webWork.map((item) => 
                                <ItemWeb 
                                id = {item.id}
                                title = {item.title}
                                description = {item.description}
                                photo = {item.photo}
                                stack = {item.stack}
                                url = {item.url}
                            />
                        )
                    }

                </div>

            
            </div>
        </>
    )
}

export default Web;