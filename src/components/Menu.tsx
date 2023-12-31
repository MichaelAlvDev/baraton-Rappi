import styles from './menu.module.css';

const Menu = () => {
    return (
        <div className={styles.menuContainer}>
            <ul className={styles.menu}>
                <li ><a id='01' href="/">Home</a></li>
                <li ><a id='02' href="/">News</a></li>
                <li ><a id='03' href="/">Contact</a></li>
                <li ><a id='04' href="/">About</a></li>
            </ul>
        </div>
    );
};

export default Menu;