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
      <Filter
        fnFilterByDisponible={props.fnFilterByDisponible}
        stFilterDisponible={props.stFilterDisponible}
        fnFilterByCantidadEnStock={props.fnFilterByCantidadEnStock}
        stCantidadEnStock={props.stCantidadEnStock}
        fnFilterByPrecioMax={props.fnFilterByPrecioMax}
        fnFilterByPrecioMin={props.fnFilterByPrecioMin}
        stRangoPrecios={props.stRangoPrecios}
      />

      <div><h1>Categorias</h1> </div>
      <Menu
        fnSortByMenu={props.fnSortByMenu}
      />
    </aside>
  );
};

export default SideBar;