import styles from './sorts.module.css'
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";


const Sorts = (props: any) => {
    return (
        <div className={styles.sortsContainer}>
            <div className={styles.title}>
                <h1>Ordenar Productos Segun:</h1>
            </div>
            <button
                onClick={props.fnSortByCantidadEnStock}
            >
                {props.stSortCantidadEnStock ? <FaAngleDown /> : <FaAngleUp />}
                <span>Cantidad</span>
            </button>
            <button
                onClick={props.fnSortByRangoPrecios}
            >
                {props.stSortRangoPrecios ? <FaAngleDown /> : <FaAngleUp />}
                Precio
            </button>
            <button
                onClick={props.fnSortByDisponible}
            >
                {props.stSortDisponible ? <FaAngleDown /> : <FaAngleUp />}Disponibilidad
            </button>
        </div>
    );
};

export default Sorts;