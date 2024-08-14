import { useDispatch } from "react-redux";
import { login } from "../../Logintoolkit/authSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import "../Login/Login.css"

const Login = ()=> {
 
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
    const dispatch = useDispatch();
    const nav = useNavigate()

    const handlelogin = async()=>{
           let data = await axios.get('http://localhost:4000/reg');
           let response = await data.data;
           let dd = response.find(e=>e.username === email && e.password === password);
           if(dd){
              dispatch(login());
              nav("/home")
           }
           else{
            alert("please register first")
           }

    }
    return (
      <>
      <div id="s1">
         <center id="cen1">
          <div id="s2"><input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email"></input>  </div>   
          <div id="s2"><input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter passowrd"></input> </div>  
          {/* <div><button onClick={()=>{dispatch(login())}}>Login</button></div>    */}
          <div id="s3"><button onClick={handlelogin}>Login</button></div>
          </center>
          </div>
      </>
     
    );
  }
  
  export default Login;
  