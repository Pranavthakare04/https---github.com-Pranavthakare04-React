import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

const Restaurentmenu = () => {
  const [resMenu, setResMenu] = useState(null);
//   console.log(resMenu);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.52110&lng=73.85020&restaurantId=21001",
    );
    const json = await data.json();
    console.log(json);
    setResMenu(json.data);
  };

  const {name, cuisines, costForTwoMessage} = resMenu?.cards[2]?.card?.card?.info || {};

  const {itemCards} = resMenu?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || {}; 

  if (!resMenu) {
    return <div>Loading...</div>;
  }

  return (
    <div className="resInfo">
      <h1>{name}</h1>
      <h2>{cuisines}</h2>
      <h3>{costForTwoMessage}</h3>
      <h2>MENU : </h2>

      <h1>{itemCards[0].card.info.name}</h1>
      <h1>{itemCards[1].card.info.name}</h1>
      <h1>{itemCards[2].card.info.name}</h1>
      <h1>{itemCards[3].card.info.name}</h1>
      <h1>{itemCards[4].card.info.name}</h1>
    </div>
  );
};

export default Restaurentmenu;
