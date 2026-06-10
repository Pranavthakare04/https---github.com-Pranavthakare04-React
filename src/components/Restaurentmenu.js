import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { res_url } from "../utils/constants";

const Restaurentmenu = () => {
  const [resMenu, setResMenu] = useState(null);
  //   console.log(resMenu);

  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      // "https://corsproxy.io/?url=" +
        // "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.52110&lng=73.85020&restaurantId=" +
        "https://demomenu.onrender.com/api/menu/" +
        id,
    );
    const json = await data.json();
    console.log(json);
    setResMenu(json.data);
  };

  const { name, cuisines, costForTwoMessage } =
    resMenu?.cards[2]?.card?.card?.info || [];

  const { itemCards } =
    resMenu?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || [];

  if (!resMenu) {
    return <div>Loading...</div>;
  }

  return (
    <div className="resInfo">
      <h1>{name}</h1>
      <h2>{cuisines}</h2>
      <h3>{costForTwoMessage}</h3>
      <h2>MENU : </h2>

      {/* <h1>{itemCards[0].card.info.name}</h1>
      <h1>{itemCards[1].card.info.name}</h1>
      <h1>{itemCards[2].card.info.name}</h1>
      <h1>{itemCards[3].card.info.name}</h1> */}

      {/* <ul>
        {itemCards?.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name}</li>
        ))}
      </ul> */}

      <ul className="menu-list">
        {itemCards?.map((item) => (
          <li key={item.card.info.id} className="menu-item">
            <img
              src={res_url + item.card.info.imageId}
              alt={item.card.info.name}
              className="menu-img"
            />

            <div className="menu-details">
              <h3>{item.card.info.name}</h3>
              <p>
                ₹{(item.card.info.price || item.card.info.defaultPrice) / 100}
              </p>
            </div>

            <div className="menu-description">
              <p>{item.card.info.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Restaurentmenu;
