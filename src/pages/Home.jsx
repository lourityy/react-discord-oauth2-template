import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
// bu bilgileri projenizde env klasöründe saklayınız, burada bulunması güvenilir değildir!
const clientId = "discord_botunuzun_idsi";
const redirectUri = encodeURIComponent("http://localhost:5173/callback"); // https://projedomaininiz.com/callback , domaininizin sonuna /callback eklemelisiniz ve bunu aynı şekilde
// Bot panelinizde de (OAuth2 sayfasında) Redirects kısmında eklemelisiniz.
const scope = encodeURIComponent("identify");
const discordAuthUrl = `https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}`;

function Home() {
  const { user } = useContext(UserContext);

  const redirectToDiscord = () => {
    window.location.href = discordAuthUrl;
  };

  return (
    <div>
      <h1>Discord OAuth Örnek</h1>
      {user ? (
        <p>Hoş geldin, {user.username}!</p>
      ) : (
        <button onClick={redirectToDiscord}>Discord ile Giriş Yap</button>
      )}
    </div>
  );
}

export default Home;