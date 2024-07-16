import { useState } from "react";
import { Fetch_url_menu } from "../Config";
const useRestaurant = () => {
    const [restaurant, setRestaurant] = useState(null);
    useEffect(() => {
        getRestaurantInfo();
      }, []);
    
      async function getRestaurantInfo() {
          const data = await fetch(
              Fetch_url_menu + id
        );
        const json = await data.json();
        // console.log(json.data);
        setRestaurant(json.data);
        //console.log(json.data.cards[2].card.card.info);
        console.log(restaurant?.cards[2]?.card?.card?.info);
    }
    return restaurant;
}
export default useRestaurant;