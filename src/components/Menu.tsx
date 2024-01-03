import { MouseEvent } from 'react';
import styles from './menu.module.css';
import menuData from "../../public/categories.json";

const Menu = (props:any) => { //abre componente
   
   function toggle_list(e: MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    const listTarget = e.currentTarget.parentElement as HTMLLIElement;
    if (listTarget.classList.contains(styles.open)) {
        listTarget.classList.replace(styles.open, styles.closed);
        // listTargetChilds? listTargetChilds.classList.replace(styles.open, styles.closed):null
        // en la linea anterior trate de ocultar todos los submenus al cerrar un padre pero me da un error el el ultimo hijo "undefined"
    } else if (listTarget.classList.contains(styles.closed)) {
        listTarget.classList.replace(styles.closed, styles.open);
    } else {
        listTarget.classList.add(styles.open);
    }
}

function renderMenu(data: any[]) {
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
                <ul>
                    {renderMenu(item.sublevels)}
                </ul>
            )}
        </li>
    ));
} function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    toggle_list(e);
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
