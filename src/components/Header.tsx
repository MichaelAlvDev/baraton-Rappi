import styles from "./header.module.css"
import logo from "../assets/logo.png"
import { FaAlignJustify } from "react-icons/fa6";
const Header = (props:any) => {
  return (
    <header className={styles.headerContent}>
      <div>
        <img src={logo} alt="logo" className={styles.imgLogo} />
      </div>
      <button onClick={props.handleShowBar}>
        <FaAlignJustify />
      </button>
    </header>
  );
};

export default Header;