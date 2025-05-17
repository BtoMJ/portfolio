import './ItemDesign.css';

const ItemDesign = ( { title, description, photo } ) => {
    return(
        <div className="item-design-container">
            <div className="info">
                <h3>{title}</h3>
                <p className="design-description">{description}</p>
            </div>
            <div className="img">
                <img src={`/public/design/${photo}.jpg`} alt={`imagen-${photo}`} />
            </div>
    </div>
    )
}

export default ItemDesign;