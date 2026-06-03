import reslist from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./shimmer";
import { useState, useEffect } from "react";
//body
const Body = () => {
  //useState hooks
  const [listofrestaurant, setlistofrestaurant] = useState([]);

  useEffect(() => {
    console.log("useEffect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.52110&lng=73.85020&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await data.json();
    console.log(json);

    setlistofrestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  };

  if(listofrestaurant.length === 0){
    return <Shimmer/>
  }

  return (
    <div className="body">
      <div className="search">search</div>
      <div className="filter">
        <button className="filter-btn"
          onClick={() => {
            const filteredList = listofrestaurant.filter(
              (res) => res.info.avgRating > 4,
            );
            setlistofrestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listofrestaurant.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
