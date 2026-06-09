import React from "react";
import reactDOM from "react-dom/client";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("Parent Component Mounted");
  }

  render() {
    return (
      <div className="About">
        <h1>About</h1>
        {/* <User /> */}
        <UserClass />
      </div>
    );
  }
}
export default About;
