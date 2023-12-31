import Product from './Product';
import styles from './gridProductos.module.css';
import productos from '../assets/products.json'

const GridProductos = (props: any) => {

    //Mapeo principal desde el Json
    const Productos  = productos.products.map((producto ) => ({
        quantity: producto.quantity,
        price: producto.price,
        available: producto.available,
        sublevel_id: producto.sublevel_id,
        name: producto.name,
        id: producto.id,
    }));

    const filterProducs = Productos?.filter((producto) => {
        // Filtrar según el sublevel_id deseado
        const sublevelToFilter = props.toSortMenu;
        return producto.sublevel_id === sublevelToFilter;
    });
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
            {filterProducs?.map((product: any) => (
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