/* default component */

/* import library */
import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Body from "./component/Body";
import Sidebar from "./component/Sidebar";
 import './App.css'; 

/* jsx functional component */
function Pavan(){
  return (
    <div>
    {/* we should have enclose tags when we are using more than one html elements/tags <></>or<div></div> */}
    <Header/>
    <div className="pavan">
            <Sidebar/>
            <Body/>
             <Sidebar/>
    </div>
    <Footer/>
    </div>
  )
}
/* export component */
export default Pavan;