import React from "react";
import { useParams } from "react-router-dom";
const User = () => {
  const { userId } = useParams();
  return (
    <div className="h-2/4 bg-red-400 text-center ">
      <h1 className="text-9xl">User:{userId}</h1>
    </div>
  );
};

export default User;
