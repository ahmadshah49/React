import React, { useState } from "react";
import UserContext,{User} from "./UserContext";

interface UserContextProviderProps {
  children: React.ReactNode;
}

const UserContextProvider: React.FC<UserContextProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<User| null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
