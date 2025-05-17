import design1 from '../../assets/design/design1.jpg';
import design2 from '../../assets/design/design2.jpg';
import design3 from '../../assets/design/design3.jpg';
import design4 from '../../assets/design/design4.jpg';
import design5 from '../../assets/design/design5.jpg';
import design6 from '../../assets/design/design6.jpg';
import design7 from '../../assets/design/design7.jpg';
import design8 from '../../assets/design/design8.jpg';
import design9 from '../../assets/design/design9.jpg';
import design10 from '../../assets/design/design10.jpg';
import design11 from '../../assets/design/design11.jpg';
import design12 from '../../assets/design/design12.jpg';
import './ItemDesign.css';

const ItemDesign = ( { id, title, description, photo } ) => {

    const imgArray = [
                        0, design1, design2, design3, design4, design5, design6,
                        design7, design8, design9, design10, design11, design12,
                     ]
                
    const img = imgArray[id] ;

    return(
        <div className="item-design-container" key={id}>
            <div className="info">
                <h3>{title}</h3>
                <p className="design-description">{description}</p>
            </div>
            <div className="img">
                <img src={img} alt={`imagen-${photo}`} />
            </div>
    </div>
    )
}

export default ItemDesign;