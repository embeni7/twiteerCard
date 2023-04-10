import React from "react";
import "./App.css";
import TwitterCard from "./components/TwitterCard";

function App() {
  const users = [
    {
      name: "Emmanuel Benitez",
      userName: "emmanuel",
      isFollowing: true,
      id:1001
    },
    {
      name: "Ezequiel Benitez",
      userName: "ezequiel",
      isFollowing: false,
      id:1002
    },
    {
      name: "Soledad Acosta",
      userName: "soledad",
      isFollowing: true,
      id:1003
    },
  ];
  return (
    <div className="App">
      {users.map((user) => (
        <TwitterCard
          key={user.id}
          name={user.name}
          userName={user.userName}
          isFollowing={user.isFollowing}
        />
      ))}
    </div>
  );
}

export default App;
