import React from "react";
import  ReactDOM  from "react-dom/client";

// const heading=React.createElement("h1",{className:"headermae"},"heading 1");
const Title=()=>(
    <a href="/">
        <img src="https://img.freepik.com/premium-vector/good-food-logo-design_79169-10.jpg?w=2000" width={100}/>
    </a> 
)

const Header=()=>{
    return (
    <>
    <div className="header">
        <Title/>
        <div className="nav-lists">
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
        </ul>
        </div>
    </div>        
    </>
    );
};

const Body=()=>{
    return (
    <></>
    );
};

const Footer=()=>{
    return (
    <h1>Footer</h1>
    );
};

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





