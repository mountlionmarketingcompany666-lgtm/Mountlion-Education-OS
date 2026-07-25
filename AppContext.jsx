import React, { createContext, useContext, useState } from "react";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [user, setUser] = useState(null);
  const [institution, setInstitution] = useState(null);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        institution,
        setInstitution,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
