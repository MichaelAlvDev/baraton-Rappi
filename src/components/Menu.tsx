import { MouseEvent } from 'react';
import styles from './menu.module.css';
import menuData from "../assets/categories.json";
import {toggle_list}from "../utils/utils"
const Menu = (props: any) => { //abre componente

    function renderMenu(data: any[]) { // Funcion para generar los items del Menu 
        return data.map(item => (
            <li
                value={item.id}
                key={item.id}
                className={`${styles.menuLi} ${styles.closed}`}
            >
                <a
                    href="/#"
                    rel="noopener noreferrer"
                    onClick={(e: MouseEvent<HTMLAnchorElement>) => handleClick(e)}
                >
                    {item.name}
                </a>
                {item.sublevels && (
                // volvemos recursiva la funcion al llamarla condicionalmente
                    <ul>
                        {renderMenu(item.sublevels)} 
                    </ul>
                )}
            </li>
        ));
    }
    function handleClick(e: MouseEvent<HTMLAnchorElement>) {
        toggle_list(e); //import de utils
        props.fnSortByMenu(e);
    }
    return (
        <div className={styles.menuContainer}>
            <ul className={`${styles.menu}`}>
                {renderMenu(menuData.categories)}
            </ul>
        </div>
    );
};

export default Menu;
