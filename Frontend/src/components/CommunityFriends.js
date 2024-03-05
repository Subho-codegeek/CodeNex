import React from "react";

class CommunityFriends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [
        {
          profilePicture: "images/avatar1.png",
          name: "Aditya Singh",
          status: "Online",
        },
        {
          profilePicture: "images/avatar2.png",
          name: "Subhamay",
          status: "Online",
        },
        {
          profilePicture: "images/avatar3.png",
          name: "Om",
          status: "Offline",
        },
        {
          profilePicture: "images/plus.png",
          name: "Find More",
        },
      ],
    };
  }

  // Event handlers go here

  render() {
    const { friends } = this.state;

    return (
      <div className="users">
        <h1>Community Friends</h1>
        <div className="user-list">
          {friends.map((friend, index) => (
            <div key={index} className="user">
              <img src={friend.profilePicture} alt="Profile" />
              <h2>{friend.name}</h2>
              <p>{friend.status}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default CommunityFriends;
