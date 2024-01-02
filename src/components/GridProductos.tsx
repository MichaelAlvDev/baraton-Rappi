import Product from './Product';
import styles from './gridProductos.module.css';
import productos from "../../public/products.json"

const GridProductos = () => {

    const Productos: any = productos.products.map((producto: any) => ({
        quantity: producto.quantity,
        price: producto.price,
        available: producto.available,
        sublevel_id: producto.sublevel_id,
        name: producto.name,
        id: producto.id,
    }));
    return (
        <div className={styles.productGrid}>
            {Productos?.map((product: any) => (
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