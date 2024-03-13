import React from "react";
import  ReactDOM  from "react-dom/client";

// const heading=React.createElement("h1",{className:"headermae"},"heading 1");
const Heading=()=>{
    return (
    <h1 id="h1" key="h1">hello jesu</h1>
    );
};

const Heading2=()=>{
    return (
    <>
    {/* <Heading/> one way */}
    {/* {Heading()} second way because internally it is a js function */}
    <h1 id="h1" key="h1">hellojs jesu</h1>
    </> 
    );
};

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading2/>);





