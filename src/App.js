

import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/home1";
import Navbar from "./component/navbar/Navbar";
import Product from "./pages/product/product";
import Shop from "./pages/shop/shop";
import Cart from "./component/navbar/cart";

import { useSelector } from "react-redux";
import Footer from "./component/footer/footer";
import Pages from "./pages/pages/pages";
import Foxkit from "./pages/foxkit/foxkit";
function App() {
  // let lstate = localStorage.getItem('loginstate');

  const lstate = useSelector((state)=>state.auth.isAuth)
  console.log(lstate)


  if(lstate){
    return (
      <>
      <BrowserRouter>
      {/* <Login/> */}
      {(lstate)?<Navbar/>:null}
         <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/home" element={(lstate)?<Home/>:<Login/>}></Route>
          <Route path="/shop" element={(lstate)?<Shop/>:<Login/>}></Route>
          <Route path="/product" element={(lstate)?<Product/>:<Login/>}></Route>
          <Route path="/pages" element={(lstate)?<Pages/>:<Login/>}></Route>
          <Route path="/foxkit" element={(lstate)?<Foxkit/>:<Login/>}></Route>
          <Route path="/cart" element={(lstate)?<Cart/>:<Login/>}></Route>
         </Routes>
         {(lstate)?<Footer/>:null}
      </BrowserRouter>
      </>
     
    );
  }

  else{
   
      return (
        <>
        <BrowserRouter>
        {/* <Login/> */}
        {(lstate)?<Navbar/>:null}
           <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path="/home" element={(lstate)?<Home/>:<Login/>}></Route>
            <Route path="/shop" element={(lstate)?<Shop/>:<Login/>}></Route>
            <Route path="/product" element={(lstate)?<Product/>:<Login/>}></Route>
            <Route path="/pages" element ={(lstate)?<Pages/>:<Login/>}></Route>
            <Route path="/foxkit" element={(lstate)?<Foxkit/>:<Login/>}></Route>
            <Route path="/cart" element={(lstate)?<Cart/>:<Login/>}></Route>
           </Routes>
           {(lstate)?<Footer/>:null}
        </BrowserRouter>
        </>
       
      );
    }
  }



export default App;

  































// import { BrowserRouter,Route,Routes } from "react-router-dom";
// import Navbar from "./component/navbar/Navbar";
// import Login from "./pages/Login/Login";
// import Home from "./pages/Home/home1";
// import Footer from "./component/footer/footer";
// import Shop from "./pages/shop/shop";

// function App() {

//   // let lstate = localStorage.getItem('loginstate');
//   // const lstate = useSelector((state)=>state.auth.isAuth)
//   // console.log(lstate)
//   return (
//    <>
//    <BrowserRouter>
//    <Navbar/>
   
//          <Routes>
//           <Route path="/" element={<Home/>}></Route>
//           <Route path="/shop" element={<Shop/>}></Route>
        
//           {/* <Route path="/" element={<Login/>}></Route> */}
//           {/* <Route path="/home" element={(lstate)?<Home/>:<Login/>}></Route>  */}
//          </Routes>
//          <Footer/>
//    </BrowserRouter>
