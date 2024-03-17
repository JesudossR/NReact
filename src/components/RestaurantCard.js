import { Img_url } from "../Config"

const RestaurantCard=({name,costForTwo,cloudinaryImageId})=>{
    // const {name,costForTwo}=res;
    return(
        <div className="card">
            <img src={Img_url+cloudinaryImageId} />
            <h4>{name}</h4>
            <p>{costForTwo}</p>
        </div>
    )
}

export default RestaurantCard;