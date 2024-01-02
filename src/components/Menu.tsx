import styles from './menu.module.css';
import menuData from "../../public/categories.json"

function handleClick (e){
    toggle_list(e)
    // return e;
}
function toggle_list(e:any) {
    // e.preventDefault();
    // let listTarget = e.target.parentElement;
    // console.log(listTarget.classList)
    // if (listTarget.classList.contains("open")) {
    //     listTarget.classList.replace("open", "closed");
    // } else if (listTarget.classList.contains("closed")) {
    //     listTarget.classList.replace("closed", "open");
    // }
    // // return e;
    e.preventDefault();
    const listTarget = e.target.parentElement;

    if (listTarget.classList.contains(styles.open)) {
        listTarget.classList.replace(styles.open, styles.closed);
    } else if (listTarget.classList.contains(styles.closed)) {
        listTarget.classList.replace(styles.closed, styles.open);
    } else {
        listTarget.classList.add(styles.open);
    }
}
function renderMenu(data:any) {
    return data.map(item => (
        <li
            key={item.id}
            className={`${styles.menuLi} ${styles.closed}`}
        >
            <a
                href="/#"
                rel="noopener noreferrer"
                onClick={(e) => handleClick(e)}
                >
                {item.name}
            </a>
            {item.sublevels && ( // Verifica si hay subcategorías
                <ul>
                    {renderMenu(item.sublevels)}
                </ul>
            )}
        </li>
    ))
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