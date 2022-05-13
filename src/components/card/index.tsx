import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../button";

import styles from './styles.module.scss';

const Card = ({data}:any) => {
    
    const [showImage, setShowImage] = useState(false);

    return(
        <div className={styles.card}>
            {data.image && data.image !== '' ? 
            showImage ? <img src={data.image} alt={data.name} /> : null   
            : <span>Sorry, no image :)</span>}
            
            
            <div className={styles.cardInfo}>
                <Link to={'/profile/' + data.id}>
                    <h3>Name: {data.name}</h3>
                    <span>Status: {data.status}</span>
                </Link>
                
                <div style={{width: 'fit-content'}} onClick={() => setShowImage(!showImage)}>
                    <Button text={showImage ? "Hide image" : "Show image"} />
                </div>
            </div>
    
        </div>
    )
}

export default Card;