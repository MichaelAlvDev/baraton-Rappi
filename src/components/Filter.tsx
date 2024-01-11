import styles from './filter.module.css';

const Filter = (props: any) => {
    const MIN = 0;
    const MAX = 8000;
    const STEP = 50;

    return (
        <div className={styles.filterContainer}>
            {/* Cantidad minima */}
            <h3>Filtros</h3>
            <span>Cantidad minima:
                <input
                    className={styles.NumberImputs}
                    type="number"
                    value={props.stCantidadEnStock}
                    onChange={props.fnFilterByCantidadEnStock}
                    step={STEP}
                />
            </span>

            <input className={styles.rangeImputs}
                type="range"
                onChange={props.fnFilterByCantidadEnStock}
                min={MIN}
                max={MAX}
                step={STEP}
                value={props.stCantidadEnStock}
            />
            {/* Precio Min / Max */}
            <span>Rango de precio</span>
            <span>Desde:
                <input
                    className={styles.NumberImputs}
                    type="number"
                    value={props.stRangoPrecios.min}
                    onChange={props.fnFilterByPrecioMin}
                    step={STEP}
                /> Hasta: <input
                    className={styles.NumberImputs}
                    type="number"
                    value={props.stRangoPrecios.max}
                    onChange={props.fnFilterByPrecioMax}
                    step={STEP}
                /></span>
                {/* INPUT RANGE PRECIO MIN */}
                <input className={styles.rangeImputs}
                    type="range"
                    onChange={props.fnFilterByPrecioMin}
                    min={MIN}
                    max={MAX}
                    step={STEP}
                    value={props.stRangoPrecios.min}
                />
                {/* INPUT RANGE PRECIO MAX */}
            <input className={styles.rangeImputs}
                type="range"
                onChange={props.fnFilterByPrecioMax}
                min={MIN}
                max={MAX}
                step={STEP}
                value={props.stRangoPrecios.max}
            />

        
        
            {/* Disponible */}
            <span>Solo Disponible:
                <input type="checkbox"
                    checked={props.stFilterDisponible}
                    onChange={props.fnFilterByDisponible}
                />
            </span>
        </div>

    );
};

export default Filter;