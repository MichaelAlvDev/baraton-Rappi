import Product from './Product';
import styles from './gridProductos.module.css';

const GridProductos = () => {
    return (
        <div className={styles.productGrid}>
            <Product />
            <Product />
            <Product /> 
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
    );
};

export default GridProductos;