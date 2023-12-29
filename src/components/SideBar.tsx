// import { useState } from "react";
import Filter from "./Filter";
import Menu from "./Menu";
import styles from "./sideBar.module.css"

const SideBar = ({ showBar }) => {

  return (
    <aside className={`${styles.sideBar} ${showBar ? null : styles.hide}`}>
      <Filter />
      <Menu />
      <div><h1>Menu</h1> </div>
    </aside>
  );
};

export default SideBar;