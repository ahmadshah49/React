import { createContext, Dispatch, SetStateAction } from "react";

export interface User {
  username: string;
  password: string;
}

export interface UserContextType {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export default UserContext;
