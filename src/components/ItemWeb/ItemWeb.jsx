import './ItemWeb.css';


const ItemWeb = ( { title, description, photo, type } ) => {

    return(
        <div className={`item-container-${type}`}>
            <div className='photo-container'>
                <img src={`src/assets/web/${photo}.jpg`} alt={`imagen-${photo}`} />
            </div>
            <div className='data-container'>
                <h3>{title}</h3>
                <p className='description'>{description}</p>
                <a className='link' href='http://www.google.com' target='_blank'>visitar</a>
            </div>
        </div> 
    )
}

export default ItemWeb;