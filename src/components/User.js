import React from "react";
import { useState, useEffect } from "react";

const User = () => {
  // const { name, location, contact } = props;
  const [User, setUser] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://api.github.com/users/pranavthakare04");
    const json = await data.json();
    console.log(json);
    setUser(json);
  };

  const { name, login, avatar_url} = User;

  return (
    <div className="userInfo">
      <img src={avatar_url} alt="User" className="photo" ></img>
      <h2>Name : {name}</h2>
      {/* <h3>Location : {userLocation}</h3> */}
      <h4>Contact : {login}</h4>
    </div>
  );
};

export default User;
