import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import styles from './styles.module.scss';

const SearchBar = () => {

    const [chars, setChars] = useState<any>([]);
    const [charList, setCharList] = useState<any>([]);
    const [inputValue, setInputValue] = useState('');

    const pagesNumbers = Array.from(Array(42).keys()).map(i => i+1);
    const pagesUrls = pagesNumbers.map(i => `https://rickandmortyapi.com/api/character/?page=${i}`);

    useEffect(() => {
        let fetch = setTimeout(() => fetchEpisodes(pagesUrls), 10);
        return () => clearTimeout(fetch);
        
    }, [])

    const fetchEpisodes = async (urls:any) => {
        const res = await Promise.all(urls.map((u:any) => fetch(u)));
        const jsons = await Promise.all(res.map((r:any) => r.json()));
        const data = jsons.map(item => item.results).flatMap(((el:any) => el));
        setChars(data);
    }

    const handleChange = ((e:any) => {
        const target = e.target;
        setInputValue(e.target.value);
        let data = chars;
        setCharList(data.filter((item:any) => item.name.toLowerCase().includes(target.value.toLowerCase())))
    })

    const handleItemClick = ((value:string) => {
        setInputValue(value);
    })

    return(
        <div className={styles.searchContainer}>
            <input 
                id="search" 
                placeholder="Search characters" 
                className={styles.input} 
                autoComplete="off" 
                value={`${inputValue}`}
                onChange={handleChange}
            />
            {inputValue.length !== 0 &&
                <ul className={styles.list}>
                    {charList.map((item:any, i:number) => (
                        <li key={i} onClick={() => handleItemClick(item.name)}>
                            <Link to={'/profile/' + item.id}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                
                </ul>
            }
            
            
        </div>
    )
}

export default SearchBar;