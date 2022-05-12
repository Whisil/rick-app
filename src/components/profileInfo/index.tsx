
import styles from './styles.module.scss';

const ProfileInfo = ({data, episodes}:any) => {

    let createdDate = new Date(data.created);

    return(
        <section>
            <div className="container">
                <div className={styles.upperRow}>
                    <img src={data.image} alt={data.name} />
                    <div>
                        <h2>{data.name}</h2>
                        <h4>{data.species}</h4>
                        <ul>
                            <li>Gender: {data.gender}</li>
                            <li>Location: {data.location.name}</li>
                            <li>Status: {data.status}</li>
                            <li>Created: {createdDate.toLocaleDateString('en-GB')}</li>
                        </ul>
                    </div>
                </div>
                <h2>Episodes:</h2>
                <ul>
                    
                    {episodes.map((item:any, i:number) => (
                        <li key={i}>
                            Ep: {item.name}
                            <span className={styles.episodeName}>{item.episode}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default ProfileInfo;