import Filter from "./Filter";
import Menu from "./Menu";
import styles from "./sideBar.module.css"

const SideBar = () => {
    return (
        <aside className={styles.sideBar}>
          <Filter/>
          <Menu/>
          <div><h1>Menu</h1> </div>
        </aside>
    );
};

export default SideBar;