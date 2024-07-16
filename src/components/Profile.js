import { useEffect, useState } from "react";
const Profile = (props) => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    useEffect(() => {
        //api call
        // setInterval(() => {
        //     console.log("reneder");
        // },1000);
        return () => {
            //componentWillUnmount phase which will stop returning the render continuosly when moving to next page.
        }
    }, []);//[count]=> empty dependency array which will call or render at it when the inside value changes everytime.Id value of count changes it will render
    
    return (
        <div>
            <h2>profilecomp</h2>
            <h2>{props.name}</h2>
            <h1>{count}</h1>
            <button onClick={() => { setCount(1); setCount2(1); }}>Count</button>
        </div>
    )
}
export default Profile;