import { res_url } from "../utils/constants";
//Restaurant List
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, cloudinaryImageId } = resData.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={res_url + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
    </div>
  );
};

export default RestaurantCard