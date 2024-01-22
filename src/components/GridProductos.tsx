import Product from './Product';
import styles from './gridProductos.module.css';
import productos from '../assets/products.json'
import { extractNumericValue, filtrarPoCategoria, filtrarPorCantidadEnStock, filtrarPorDisponibilidad, filtrarPorRangoDePrecios } from '../utils/utils';
import { Producto, Productos } from '../types/types';

const GridProductos = (props: any) => {

    //Mapeo principal desde el Json
    const Productos = productos.products.map((producto) => ({
        quantity: producto.quantity,
        price: extractNumericValue(producto.price),
        available: producto.available,
        sublevel_id: producto.sublevel_id,
        name: producto.name,
        id: producto.id,
    }));
    const filtrarProductos = (productosAFiltrar: Productos) => {
        let productosFiltrados = productosAFiltrar; // lista original de productos
        // Aplicar filtros según el estado actual
        if (props.stFilterDisponible) {
            productosFiltrados = filtrarPorDisponibilidad(productosFiltrados, true);
        }
        productosFiltrados = filtrarPorRangoDePrecios(productosFiltrados, props.stRangoPrecios.min, props.stRangoPrecios.max);
        productosFiltrados = filtrarPorCantidadEnStock(productosFiltrados, props.stCantidadEnStock);
        productosFiltrados = filtrarPoCategoria(productosFiltrados, props.toSortMenu);
        return productosFiltrados;
    };
    const filterProducs = filtrarProductos(Productos)


    if (props.stSortCantidadEnStock) {
        filterProducs.sort((a: Producto, b: Producto) => a.quantity - b.quantity);
    }
    if (props.stSortRangoPrecios) {
        filterProducs.sort((a: Producto, b: Producto) => a.price - b.price);
    }
    if (props.stSortDisponible) {
        filterProducs.sort((a: Producto, b: Producto) => (a.available === b.available) ? 0 : a.available ? -1 : 1);
    }


    return (

        <div className={styles.productGrid}>
            {/* migas de pan */}
            <div className={styles.migasCont}>
                <h1>
                    {/* nota Hacer un switch para escribir las categorias segun el Id */}
                    Categoria: {props.toSortMenu}
                </h1>
            </div>

            {/* el map recibe los productos filtrados  */}
            {filterProducs?.map((product: Producto) => (
                <Product
                    key={product.id}
                    productQuantity={product.quantity}
                    productPrice={product.price}
                    productAvailable={product.available}
                    productSublevel={product.sublevel_id}
                    productName={product.name}
                    productId={product.id}
                />
            ))}

        </div>
    );
};

export default GridProductos;