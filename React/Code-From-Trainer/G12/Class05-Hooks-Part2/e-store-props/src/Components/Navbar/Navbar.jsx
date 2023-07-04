import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { useSelector } from "react-redux";
import { getProductsInCart } from "../../state/Slices/ProductsSlice";
function Navbar(props) {
  console.log("Navbar props", props);
  const cartProducts = useSelector(getProductsInCart); // Use the getProductsInCart selector

  const { navbarLinkData } = props;

  return (
    <nav className="Navbar">
      <ul>
        {navbarLinkData.map((linkData, i) => (
          <li key={linkData.link + i}>
            {/* <a href={linkData.link}>{linkData.text}</a> */}
            <NavLink to={linkData.link}>
              {linkData.text}{" "}
              {linkData.link === "/cart" && cartProducts.length > 0 && (
                <strong>{cartProducts.length}</strong>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
