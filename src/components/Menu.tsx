import { MouseEvent } from 'react';
import styles from './menu.module.css';
import menuData from "../../public/categories.json";

function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    toggle_list(e);
    // return e;
}

function toggle_list(e: MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    const listTarget = e.currentTarget.parentElement as HTMLLIElement;
    const listTargetChilds = listTarget.children[1].children[0] as HTMLElement;

    if (listTarget.classList.contains(styles.open)) {
        listTarget.classList.replace(styles.open, styles.closed);
        listTargetChilds.classList.replace(styles.open, styles.closed);
    } else if (listTarget.classList.contains(styles.closed)) {
        listTarget.classList.replace(styles.closed, styles.open);
    } else {
        listTarget.classList.add(styles.open);
    }
}

function renderMenu(data: any[]) {
    return data.map(item => (
        <li
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
}

const Menu = () => {
    return (
        <div className={styles.menuContainer}>
            <ul className={`${styles.menu}`}>
                {renderMenu(menuData.categories)}
            </ul>
        </div>
    );
};

export default Menu;
