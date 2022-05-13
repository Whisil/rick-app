import {useEffect, useState} from 'react';
import { useParams } from 'react-router';

import ProfileInfo from '../components/profileInfo';

const Profile = () => {

    const [userData, setUserData] = useState({
        name: "",
        status: "",
        species: "",
        gender: "",
        location: {
            name: "",
        },
        image: "",
        created: "",
        episode: []
    });
    const [userEpisodes, setUserEpisodes] = useState([{}]);

    let {userId} = useParams();

    useEffect(() => {
        const fetchChar = (() => {
            fetch(`https://rickandmortyapi.com/api/character/${userId}`)
            .then((res) => res.json())
            .then((res) => setUserData(res))
    
        })

        fetchChar();
    }, [userId])

    useEffect(() => {
        const fetchEpisodes = async (urls:any) => {
            const res = await Promise.all(urls.map((u:any) => fetch(u)));
            const jsons = await Promise.all(res.map((r:any) => r.json()));
            setUserEpisodes(jsons);
        }

        fetchEpisodes(userData.episode);
    },[userData])

    return(
        <ProfileInfo data={userData} episodes={userEpisodes} />
    )
}

export default Profile;