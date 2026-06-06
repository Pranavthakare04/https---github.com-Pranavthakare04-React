import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      userinfo: {
        name: "Dummy Name",
        location: "DEfault Location",
        contact: "default contact",
      }
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/pranavthakare04");
    const json = await data.json();
    this.setState({
      userinfo: json,
    });
  }

  
  render() {
    const { name, login, avatar_url} = this.state.userinfo;
    // const { name, location, contact } = this.props;
    return (
      <div className="userInfo">
        <img src={avatar_url} alt="User" className="photo" ></img>
        <h2>Name : {name}</h2>
        {/* <h3>Location : {location}</h3> */}
        <h4>Contact : {login}</h4>
      </div>
    );
  }
}

export default UserClass;
