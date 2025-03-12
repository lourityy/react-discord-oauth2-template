import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Profile() {
  const { user, loading } = useContext(UserContext); 

  if (loading) {
    return <div>Kullanıcı bilgileri yükleniyor...</div>;
  }

  if (!user) {
    return <div>Kullanıcı bilgileri bulunamadı.</div>;
  }

  return (
    <div>
      <h1>Kullanıcı Bilgileri</h1>
      <p>ID: {user.id}</p>
      <p>Kullanıcı Adı: {user.username}</p>
      <p>Email: {user.email || "Email bilgisi yok."}</p>
    </div>
  );
}

export default Profile;