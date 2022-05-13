import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { useState } from 'react';
import styles from './styles.module.scss';
import { useEffect } from 'react';
import Button from '../button';
import SearchBar from '../searchBar';

const Header = () => {

    const [login, setLogin] = useState(false);
    const [data, setData] = useState<any>({});

    const responseFacebook = (response:any) => {
        localStorage.setItem('user', JSON.stringify(response));
        setData(response);
        if(response.accessToken){
            setLogin(true);
           
        } else {
            setLogin(false);
        }
    }

    useEffect(() => {
        const loggedInUser = localStorage.getItem('user');
        if(loggedInUser){
            setLogin(true);
            setData(JSON.parse(loggedInUser));
        }

    }, [login])

    return (
      <header className={styles.header}>
        <nav className={styles.nav}>
          <SearchBar />
          <div className={styles.logins}>
            {!login ?
            <FacebookLogin
              appId="5129054827170562"
              autoLoad
              fields="name,picture"
              scope="public_profile"
              callback={responseFacebook}
              render={renderProps => (
                <div onClick={renderProps.onClick}>
                  <Button variant="login" />
                </div>
              )} />
            :
              <div className={styles.profile}>
                  <p className={styles.name}>{data.name}</p>
                  <img src={data.picture.data.url} alt={data.name} />
              </div>
            }
          </div>
        </nav>
      </header>
    );
}

export default Header;