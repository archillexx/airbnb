

const Cards = (props)=>{
    return(
        
            
            
                <div className="card">
                    
                    <img className="card__image" src={`./images/${props.item.img}`} alt="image1"/>
                    <h2>{props.item.location}</h2>
                </div>
           
    )
}

export default Cards