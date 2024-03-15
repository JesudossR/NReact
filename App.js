import React from "react";
import  ReactDOM  from "react-dom/client";

// const heading=React.createElement("h1",{className:"headermae"},"heading 1");
const Title=()=>(
    <a href="/">
        <img src="https://img.freepik.com/premium-vector/good-food-logo-design_79169-10.jpg?w=2000" width={100}/>
    </a> 
)

const Header=()=>{
    return (
    <>
    <div className="header">
        <Title/>
        <div className="nav-lists">
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
        </ul>
        </div>
    </div>        
    </>
    );
};

const restaurantList=[
    {
    "info": {
    "id": "89583",
    "name": "UBQ by Barbeque Nation",
    "cloudinaryImageId": "xgj2cn4y2y8mtxisaplp",
    "locality": "Thuraipakkam",
    "areaName": "Thuraipakkam",
    "costForTwo": "₹300 for two",
    "cuisines": [
    "North Indian",
    "Barbecue",
    "Biryani",
    "Kebabs",
    "Mughlai",
    "Desserts"
    ],
    "avgRating": 4.1,
    "parentId": "10804",
    "avgRatingString": "4.1",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 34,
    "lastMileTravel": 5.6,
    "serviceability": "SERVICEABLE",
    "slaString": "34 mins",
    "lastMileTravelString": "5.6 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-03-14 23:30:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "50% OFF",
    "subHeader": "UPTO ₹100"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {
    "context": "seo-data-02e35171-e125-49ee-82ce-b2165e750ea8"
    },
    "cta": {
    "link": "https://www.swiggy.com/restaurants/ubq-by-barbeque-nation-thuraipakkam-chennai-89583",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
    "id": "485445",
    "name": "Chinese Wok",
    "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
    "locality": "Old Mahabalipuram Road OMR",
    "areaName": "Old Mahabalipuram Road OMR",
    "costForTwo": "₹250 for two",
    "cuisines": [
    "Chinese",
    "Asian",
    "Tibetan",
    "Desserts"
    ],
    "avgRating": 3.9,
    "parentId": "61955",
    "avgRatingString": "3.9",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 21,
    "lastMileTravel": 4.2,
    "serviceability": "SERVICEABLE",
    "slaString": "21 mins",
    "lastMileTravelString": "4.2 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-03-15 02:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "50% OFF",
    "subHeader": "UPTO ₹100"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {
    "context": "seo-data-02e35171-e125-49ee-82ce-b2165e750ea8"
    },
    "cta": {
    "link": "https://www.swiggy.com/restaurants/chinese-wok-old-mahabalipuram-road-omr-chennai-485445",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }]

const RestaurantCard=({name,costForTwo,cloudinaryImageId})=>{
    // const {name,costForTwo}=res;
    return(
        <div className="card">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} />
            <h4>{name}</h4>
            <p>{costForTwo}</p>
        </div>
    )
}

const Body=()=>{
    return (
    <>
    <div className="body-list">
    {
        restaurantList.map(res=>{
            // console.log(res.info);
           return <RestaurantCard  key={res.info.id} {...res.info}/>
        })
    }
    </div>
    
    </>
    );
};

const Footer=()=>{
    return (
    <h1>Footer</h1>
    );
};

const AppLayout=()=>{
    return (
    <>
    {/* <Heading/> one way */}
    {/* {Heading()} second way because internally it is a js function */}
    <Header/>
    <Body/>
    <Footer/>
    </> 
    );
};

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);





