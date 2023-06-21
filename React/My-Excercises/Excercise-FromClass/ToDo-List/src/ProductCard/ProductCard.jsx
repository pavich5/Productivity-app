import classes from "./ProductCard.module.css";

function ProductCard({ product}) {
    console.log(product);

    const handleClick = () => {
        updatePrice(product.price);
      };
  return (
    <div className={classes.ProductCard}>
      <div className={classes.heading}>{product.title}</div>
        <p>{product.description}</p>
        <strong>{product.price}$</strong>
        <button onClick={handleClick}>Add Price</button>
    </div>
  );
}

export default ProductCard;
