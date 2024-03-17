//named import
import { useState } from "react";
import {restaurantList  } from "../Config"
//default import
import RestaurantCard from "./RestaurantCard";

//hooks-normal js function
//state-react will keep track on the varible and update   

function filterData(searchText,restaurants){
    const filterDatas=restaurants.filter(
        (restaurant)=> restaurant.info.name.includes(searchText)
    )
    return filterDatas
}

const Body=()=>{
    // const a="name" in js
    // in react local variable shoulbe created like --> const[a]=useState("name")
    const[searchText,setSearchText]=useState("");//usestate() returns the array [variableName,function to update the variable]
    //whatever we search will get updated in local variable
    const[restaurants,setRestaurants]=useState(restaurantList);
    return (
    <>
    <div className="search-container">
        <input type="text" className="search-bar" placeholder="search" value={searchText} onChange={(e)=>{
            setSearchText(e.target.value);
        }}/>
        <button className="search-btn" onClick={()=>{
            const data=filterData(searchText,restaurants);
            setRestaurants(data); 
    }
        }>Search</button>
    </div>
    <div className="body-list">
    {
        restaurants.map(res=>{
            // console.log(res.info);
           return <RestaurantCard  key={res.info.id} {...res.info}/>
        })
    }
    </div> 

    </>
    );
};

export default Body;