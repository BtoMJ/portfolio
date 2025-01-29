import ItemDesign from '../../components/ItenDesign/ItemDesign.jsx';
import NavBar from '../../components/NavBar/Navbar.jsx';
import designWork from '../../data/works-design.json';
import './Design.css';

const Design = () => {

    return(
        <>
            <div className='navbar-container'>
                <NavBar active="design"/>
            </div>

            <div className="design-container">
                <h2>Algunos de mis diseños</h2>
                <p className='design-text'>
                    Creaciones digitales e impresas personalizadas, <br/>
                    siempre buscando resaltar cada proyecto.
                </p>
                <div className='works'>
                    {
                        designWork && designWork.map((item) => 
                             <ItemDesign 
                                key = {item.id}
                                title = {item.title}
                                description = {item.description}
                                photo = {item.photo}
                            />
                        )
                    }
                </div>
            </div>

        </>
    )
}

export default Design;