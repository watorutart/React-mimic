import React, { useState, useEffect } from "react";
import { UserInfo } from "../../type/api/userinfo";

const TestServer = () => {
  const [users, setUsers] = useState<UserInfo[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.username}</p>
        </div>
      ))}
    </div>
  );
};

export default TestServer;
