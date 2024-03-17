import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// const heading=React.createElement("h1",{className:"headermae"},"heading 1");

const AppLayout=()=>{
    return (
    <>
    {/* <Heading/> one way */}
    {/* {Heading()} second way because internally it is a js function */}
    <Header/>
    <Body/>
    <Footer/>
    </> 
    );
};

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);





