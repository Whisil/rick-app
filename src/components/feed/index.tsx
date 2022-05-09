import { useEffect, useState } from "react";
import Button from "../button";
import Card from "../card";


import styles from './styles.module.scss';

const Feed = () => {

    const [page, setPage] = useState(1);
    const [chars, setChars] = useState<any>([]);

    useEffect(() => {
        let fetchTimeout = setTimeout(() => getAllCharacters(page), 10);

        return () => clearTimeout(fetchTimeout);
    }, [page])

    const getAllCharacters = (page:number) => {
        fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
        .then((res) => res.json())
        .then((res) => onCharsFetch(res.results))
    }

    const onCharsFetch = (newChars:any) => {
        setChars((chars:any) => [...chars, ...newChars]);
    }

    return(
        <>
            <div className={styles.container}>
                <div className={styles.cardsContainer}>
                    {chars && chars.map((item:any, i:number) => (
                        <Card data={item} key={i} />
                    ))}
                </div>
                
                <div style={{width: 'fit-content'}} onClick={() => setPage(page + 1)}>
                    <Button text="Show more" />
                </div>
            </div>
            
        </>
    )
}

export default Feed;