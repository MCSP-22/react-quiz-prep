//grab all componenets we need
import Users from "./Components/Users";
import React, { useState, useEffect } from "react";

function App() {
  // 1. Use a react hook to create some state called users with an initial value of an empty Array.
  const [users, setUsers] = useState([]);

  // 2. Use the endpoint https://jsonplaceholder.typicode.com/users to get data
  // 3. Use a hook to make the API request when the app loads.
  useEffect(() => {
    const getUserData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    };

    getUserData();
  }, []);

  // 4. Create Users and UserItem components
  // 5. Pass down the users state into the Users component, loop through it, and render UserItem components
  // 6. Add event listeners to each UserItem, that when clicked will console.log() that UserItems unique ID

  if (users.length === 0) {
    return <h1>See instructions commented out in App.jsx!</h1>;
  }
  return (
    <div className="container">
      <Users users={users} />
    </div>
  );
}

export default App;
