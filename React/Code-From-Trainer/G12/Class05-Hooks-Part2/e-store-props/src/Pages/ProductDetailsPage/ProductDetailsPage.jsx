import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import ProductDetailsPanel from "../../Components/ProductDetailsPanel/ProductDetailsPanel";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../state/Slices/ProductsSlice";

const ProductDetailsPage = () => {
  const products = useSelector(state => state.products.products);
  const { id: productId } = useParams();
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!productId) return;

    const foundProduct = products.find(
      product => product.id === Number(productId)
    );

    if (!foundProduct) {
      navigate("/not-found");
      return;
    }

    setSelectedProduct(foundProduct);
  }, [productId, products]);

  const handleAddToCart = () => {
    dispatch(addToCart({ selectedProduct }));
  };
  

  return (
    <section className="page">
      <div className="page-heading">
        <h2>Product Details</h2>
      </div>
      <div className="page-content">
        {selectedProduct && (
          <ProductDetailsPanel
            product={selectedProduct}
            addToCart={() => handleAddToCart(selectedProduct)} // Pass the handleAddToCart function with the selectedProduct
          />
        )}
      </div>
    </section>
  );
};

export default ProductDetailsPage;
