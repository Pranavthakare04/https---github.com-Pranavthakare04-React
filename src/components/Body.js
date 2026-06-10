import reslist from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./shimmer";
import { useState, useEffect } from "react";
import { Link } from "react-router";

//body
const Body = () => {
  //useState hooks
  const [listofrestaurant, setlistofrestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    console.log("useEffect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      // "https://corsproxy.io/?url=" +
      "https://demodata-76qi.onrender.com/api/restaurants/",
    );
    const json = await data.json();
    console.log(json);

    setlistofrestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [],
    );

    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [],
    );
  };

  if (listofrestaurant.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="search">
        <input
          className="search-input"
          type="text"
          placeholder="Search Restaurants..................."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          className="search-btn"
          onClick={() => {
            const filteredList = listofrestaurant.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase()),
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Search
        </button>
      </div>
      {/* <div className="search">search</div> */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listofrestaurant.filter(
              (res) => res.info.avgRating > 4.5,
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => {
          return (
            // <RestaurantCard key={restaurant.info.id} resData={restaurant} />
            <Link to={"/res/" + restaurant.info.id} key={restaurant.info.id}>
              <RestaurantCard resData={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
