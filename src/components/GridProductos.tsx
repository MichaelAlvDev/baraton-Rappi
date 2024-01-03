import Product from './Product';
import styles from './gridProductos.module.css';
import productos from "../../public/products.json"

const GridProductos = (props: any) => {
    const Productos: any = productos.products.map((producto: any) => ({
        quantity: producto.quantity,
        price: producto.price,
        available: producto.available,
        sublevel_id: producto.sublevel_id,
        name: producto.name,
        id: producto.id,
    }));
    const filterProducs = Productos?.filter((producto: any) => {
        // Filtrar según el sublevel_id deseado
        const sublevelToFilter = props.toSortMenu; 
        return producto.sublevel_id === sublevelToFilter;
    });
    console.log(filterProducs)
    return (

        <div className={styles.productGrid}>
            {/* el map recibe los productos filtrados  */}
            {filterProducs?.map((product: any) => (
                <Product
                    key={product.id}
                    productQuantity={product.quantity}
                    productPrice={product.price}
                    productAvailable={product.avalailable}
                    productSublevel={product.sublevel_id}
                    productName={product.name}
                    productId={product.id}
                />
            ))}

        </div>
    );
};

export default GridProductos;