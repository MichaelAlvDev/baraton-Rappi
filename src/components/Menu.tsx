import styles from './menu.module.css';
import menuData from "../../public/categories.json"

function renderMenu(data){
    return data.map(item => (
        <li key={item.id}>
            {item.name}

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
            <ul className={styles.menu}>
                       {renderMenu(menuData.categories)} 
            </ul>
        </div>
    );
};

export default Menu;