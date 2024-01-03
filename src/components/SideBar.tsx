// import { useState } from "react";
import Filter from "./Filter";
import Menu from "./Menu";
import styles from "./sideBar.module.css"

const SideBar = (props: any) => {
  return (
    <aside className={`${styles.sideBar} ${props.showBar ? null : styles.hide}`}>
      <div><h1>Filtros</h1> </div>
      <Filter />
      <div><h1>Categorias</h1> </div>
      <Menu 
        fnSortByMenu={props.fnSortByMenu}
      />

    </aside>
  );
};

export default SideBar;