import Product from './Product';
import styles from './gridProductos.module.css';

const GridProductos = () => {
    return (
        <div className={styles.productGrid}>
            <div><h1>grid productos</h1></div>
            <Product/>
        </div>
    );
};

export default GridProductos;