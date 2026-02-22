import { createContext, useContext, useState, ReactNode } from "react";

type User={
  id:string
  email:string
};

type AuthContextType={
  user:User|null
  login:(u:User)=>void
  logout:()=>void
};

const AuthContext=createContext<AuthContextType|null>(null);

export const AuthProvider=({children}:{children:ReactNode})=>{
  const [user,setUser]=useState<User|null>(null);

  const login=(u:User)=>setUser(u);
  const logout=()=>setUser(null);

  return(
    <AuthContext.Provider value={{user,login,logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth=()=>{
  const ctx=useContext(AuthContext);
  if(!ctx) throw new Error("useAuth must be inside AuthProvider");
  return ctx;
};