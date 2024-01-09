import styles from './filter.module.css';

const Filter = () => {
 
    return (
        <div className={styles.filterContainer}>
            {/* Cantidad minima */}
            <h3>Filtros</h3>
            <span>Cantidad minima</span>
            <input type="range" className={styles.rangeImputs} />
            {/* Precio Min / Max */}
            <span>Rango de precio</span>
            <input type="range" className={styles.rangeImputs} />
            <input type="range" className={styles.rangeImputs} />
            {/* Disponible */}
            <span>Solo Disponible: <input type="checkbox"
            // checked={isChecked/*State para manjar el filtro*/}
            /></span>
        </div>

    );
};

export default Filter;