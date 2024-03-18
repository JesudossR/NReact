//named import
import { useState,useEffect } from "react";
import { restaurantList } from "../Config";
//default import
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

//components will be rerendered whenever the state and props are changed
//hooks-normal js function
//useState-react will keep track on the varible and update
//useEffect-
function filterData(searchText, restaurants) {
  const filterDatas = restaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return filterDatas;
}
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
    console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setAllRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
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
          return <RestaurantCard key={res.info.id} {...res.info} />;
        })}
      </div>
    </>
  );
};

export default Body;
