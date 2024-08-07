//named import
import { useState,useEffect } from "react";
import { restaurantList } from "../Config";
//default import
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
//components will be rerendered whenever the state and props are changed
//hooks-normal js function
//useState-react will keep track on the varible and update
//useEffect-

const Body = () => {
  // const a="name" in js
  // in react local variable shoulbe created like --> const[a]=useState("name")
  const [searchText, setSearchText] = useState(""); //usestate() returns the array [variableName,function to update the variable]
  //whatever we search will get updated in local variable
  const[allRestaurants,setAllRestaurants]=useState([])
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);


  //useEffect has two arguments first one is the callback function and second is dependency array i,e  depends on the state varible array(searchtext or restuarants)
  useEffect(() => {
    getRestaurants();
  },[])

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setAllRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>offline ,check connection </h1>
  }

  if (!filteredRestaurants) return <h1>Not found</h1>

  return allRestaurants.length ===0?(<Shimmer/>):(
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-bar"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="body-list">
        {filteredRestaurants.map((res) => {
          // console.log(res.info);
          return (
            <Link to={"/restaurant/"+res.info.id} key={res.info.id}><RestaurantCard {...res.info} /></Link>
          )
        })}
      </div>
    </>
  );
};

export default Body;

// React is the single page application..