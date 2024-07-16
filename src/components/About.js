import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
import React from "react";
class About extends React.Component {
    constructor(props) {
        super(props);
       
        
    }
    componentDidMount() {
        //best place to make an api call
        // because it will be execute after render 
        
    } 
    render(){
        return (
            <div>
                <h1>About us page</h1>
                <Profile name={"jesu"} />
                <ProfileClass name={"jesu"}/>
            </div>
        )
    }
    
}
export default About;