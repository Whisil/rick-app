import {ReactComponent as FacebookIcon} from '../../images/facebook.svg'

import styles from './styles.module.scss';

interface ButtonProps {
    variant?: 'login';
    text?: string;
}

const Button = ({variant, text}:ButtonProps) => {
    return(
        <button className={styles.btn} style={variant === 'login' ? {display: 'flex', alignItems: 'center'} : {}}>
            {variant === 'login' ? 
                <>
                    Log in with
                    <FacebookIcon className={styles.btnIcon} />
                </>
            : <>{text}</>}
        </button>
    )
}

export default Button;