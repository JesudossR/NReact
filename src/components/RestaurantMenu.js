import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Fetch_Menu, Img_url } from "../Config";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const params = useParams();
  const { id } = params;
  // console.log(params)

  //const [restaurant, setRestaurant] = useState(null);
  const restaurant=useRestaurant(id)
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(Fetch_Menu
      +id
    );
    const json = await data.json();
    // console.log(json.data);
    setRestaurant(json.data);
    //console.log(json.data.cards[2].card.card.info);
    console.log(restaurant?.cards[2]?.card?.card?.info);
  }
  return (!restaurant) ? (
    <Shimmer />
  ) : (
    <>
      <div>
        <img
          src={Img_url + restaurant?.cards[2].card.card.info.cloudinaryImageId}
        />
        <h1>Restaurant Menu: {restaurant?.cards[2]?.card?.card?.info?.id}</h1>
        <h2>{restaurant?.cards[2]?.card?.card?.info?.name}</h2>
      </div>
              <div>{(restaurant?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)?.map((item) => <li>{ item.card.info.name}</li>)}</div>
    </>
  );
};

export default RestaurantMenu;
