// import { useState,useEffect } from "react";
// const useGetRestaurants = () => {
   
            
//     const [allRestaurants, setAllRestaurants] = useState([])
//     const [filteredRestaurants, setFilteredRestaurants] = useState([]);

//     //useEffect has two arguments first one is the callback function and second is dependency array i,e  depends on the state varible array(searchtext or restuarants)
//     useEffect(() => {
//     getRestaurants();
//     },[])
//     async function getRestaurants() {
//         const data = await fetch(
//             "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&page_type=DESKTOP_WEB_LISTING"
//         );
//         const json = await data.json();
//         //console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
//         setAllRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//         setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
//         }
//     return allRestaurants, filteredRestaurants;
// }
// export default useGetRestaurants;
