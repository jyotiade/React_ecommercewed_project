import { TbBrandPicsart } from "react-icons/tb";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import '../../component/navbar/navbar.css';

const Footer=()=>{

    return(
        <>
        <section>
            <div id="f1">

                <div>
                    <ul>
                        <li id="l1">About</li>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>FAQs</li>
                        <li>Blog</li>
                    </ul>
                </div>

                <div>
                    <ul>
                        <li id="l1">Information</li>
                        <li>My account</li>
                        <li>Cart</li>
                        <li>Wishlist</li>
                        <li>Product Compare</li>
                    </ul>
                </div>

                <div id="id1">
                  <div>Don't miss a thing</div>
                  <p>Enter your email below to be the first to know about new collections and product launches.</p>
                  <input type="text" placeholder="enter email" />
                </div>

            </div>
            <div id="id2">
                <li><TbBrandPicsart /></li>
                <li><FaFacebook /></li>
                <li><FaInstagram /></li>
                <li><FaXTwitter /></li>
            </div>

         <center>  <div id="id3"><img src="https://skins.minimog.co/cdn/shop/files/logo_78b3c84d-12a5-49a9-9cb5-067a8133c37d.png?v=1623830615&width=500" alt="" /></div></center> 
        </section>
        </>
    )

}
export default Footer;