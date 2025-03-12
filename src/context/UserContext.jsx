import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); 
  const [loading, setLoading] = useState(true);

  const fetchUserData = async (accessToken) => {
    try {
      const response = await fetch("https://discord.com/api/users/@me", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error("Kullanıcı bilgileri alınamadı.");
      }

      const userData = await response.json();
      setUser(userData); 
    } catch (error) {
      console.error("Hata:", error.message);
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("discord_access_token");
    if (accessToken) {
      fetchUserData(accessToken);
    } else {
      setLoading(false); 
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, loading }}>
      {children}
    </UserContext.Provider>
  );
};