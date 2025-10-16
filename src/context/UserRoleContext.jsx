import React, { createContext, useContext, useState } from "react";

const UserRoleContext = createContext();

export const UserRoleProvider = ({ children }) => {
  const [role, setRole] = useState("frontdesk"); // default role

  const toggleRole = () => {
    setRole(prev => (prev === "frontdesk" ? "doctor" : "frontdesk"));
  };

  return (
    <UserRoleContext.Provider value={{ role, setRole, toggleRole }}>
      {children}
    </UserRoleContext.Provider>
  );
};

export const useUserRole = () => useContext(UserRoleContext);
