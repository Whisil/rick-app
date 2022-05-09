import { useState } from "react";
import Button from "../button";

import styles from './styles.module.scss';

const Card = ({data}:any) => {
    
    const [showImage, setShowImage] = useState(false);

    return(
        <div className={styles.card}>
            {data.image && data.image != '' ? 
            showImage ? <img src={data.image} alt={data.name} /> : null   
            : <span>Sorry, no image :)</span>}
            
            
            <div className={styles.cardInfo}>
                <h3>Name: {data.name}</h3>
                <span>Status: {data.status}</span>
                <div onClick={() => setShowImage(!showImage)}>
                    <Button text={showImage ? "Hide image" : "Show image"} />
                </div>
            </div>
    
        </div>
    )
}

export default Card;