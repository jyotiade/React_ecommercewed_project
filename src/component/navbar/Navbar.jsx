import { Link } from "react-router-dom";
import '../../component/navbar/navbar.css';
import '../footer/footer';
// import { RiAccountCircleLine } from "react-icons/ri";
// import { RiShoppingBagLine } from "react-icons/ri";

import { useDispatch } from "react-redux";
import { logout } from "../../Logintoolkit/authSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaBars } from "react-icons/fa6";
// import Cart from "./cart";
// import { useState } from "react";

const Navbar = () => {
  // const [cartstate,setCartstate] = useState(null)
  const nav = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.auth.items)
  const lout = () => {
    dispatch(logout());
    nav("/");
  };


  return (
    <>
      <input type="checkbox" id="show" hidden/>
      <label for="show" id="bar" ><FaBars /></label>

      {/* <center id="main">

        <section id="nav">

          <input type="text" placeholder="Search products" />
          <div id="div1">LUCERNA</div>
          <div id="l1">
            <div id="i1" ><RiAccountCircleLine /></div>
            <div id="i2"><RiShoppingBagLine /></div>
          </div>
        </section>
        <section id="nav1">
          <div><Link to="/" style={{ color: "black" }}>Home</Link></div>
          <div><Link to="/shop" style={{ color: "black" }}>Shop</Link></div>
          <div><Link to="/product" style={{ color: "black" }}>Product</Link></div>
          <div><Link to="/pages" style={{ color: "black" }}>Pages</Link></div>
          <div><Link to="/foxkit" style={{ color: "black" }}>Foxkit</Link></div>

          <ul id="n1">
            <li><button id="b1">log in</button></li>
            <li><Link to={`/cart`}>Cart</Link><sup>{cart.length}</sup></li>
            <li>
              {" "}
              <button onClick={lout} id="b1">logout</button>
            </li>
          </ul>
        </section>



      </center> */}

    <div id="new">LUCERNA</div>

      <div id="navbar">
       
        <div><Link to="/" style={{ color: "black" }}>Home</Link></div>
        <div><Link to="/shop" style={{ color: "black" }}>Shop</Link></div>
        <div><Link to="/product" style={{ color: "black" }}>Product</Link></div>
        <div><Link to="/pages" style={{ color: "black" }}>Pages</Link></div>
        <div><Link to="/foxkit" style={{ color: "black" }}>Foxkit</Link></div>
        <div><button id="b1">log in</button></div>
        <div><button><Link to={`/cart`}>Cart</Link><sup>{cart.length}</sup></button></div>
        <div>
              {" "}
              <button onClick={lout} id="b1">logout</button>
            </div>
      </div>
    
    </>
  )
}
export default Navbar