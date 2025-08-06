import web1 from '../../assets/web/web1.png';
import web2 from '../../assets/web/web2.png';
import web3 from '../../assets/web/web3.png';
import web4 from '../../assets/web/web4.jpg';
import web5 from '../../assets/web/web5.png';
import web6 from '../../assets/web/web6.png';
import web7 from '../../assets/web/web4.jpg';
import web8 from '../../assets/web/web8.png';
import web9 from '../../assets/web/web9.png';
import './ItemWeb.css';


const ItemWeb = ( { id, photo, title, description, stack, url } ) => {

    const imgArrayWeb = [
                            0, web1, web2, web3, web4, web5, web6, web7, web8, web9
                        ]
                    
    const imgWeb = imgArrayWeb[id] ;

    return(
        <div className='item-container' key={id}>

            <div className='photo-container'>
                <img src={imgWeb} alt={`imagen-${photo}`} />
            </div>
            <div className='data-container'>
                <h3>{title}</h3>
                <p className='description'>{description}</p>
                <p className='stack'>{stack}</p>
                <a className='link' href={url} target='_blank'>visitar</a>
            </div>

        </div> 
    )
}

export default ItemWeb;