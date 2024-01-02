import styles from "./product.module.css"


const Product = (props:any) => {
    return (
        <div className={styles.productBox}> 
           <h1>
           name: {props.productName}
           </h1>
          <h4>Precio: {props.productPrice}</h4>
          <h4>Existencia:{props.productQuantity}</h4>
        </div>

    );
};

export default Product;