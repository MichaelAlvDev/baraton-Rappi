// import { useState } from "react";
import Filter from "./Filter";
import Menu from "./Menu";
import Sorts from "./Sorts";
import styles from "./sideBar.module.css"

const SideBar = (props: any) => {
  return (
    <aside className={`${styles.sideBar} ${props.showBar ? null : styles.hide}`}>
      <Sorts
        fnSortByDisponible={props.fnSortByDisponible}
        stSortDisponible={props.stSortDisponible}
        fnSortByRangoPrecios={props.fnSortByRangoPrecios}
        stSortRangoPrecios={props.stSortRangoPrecios}
        fnSortByCantidadEnStock={props.fnSortByCantidadEnStock}
        stSortCantidadEnStock={props.stSortCantidadEnStock}
      />
      <Filter />

      <div><h1>Categorias</h1> </div>
      <Menu
        fnSortByMenu={props.fnSortByMenu}
      />
    </aside>
  );
};

export default SideBar;