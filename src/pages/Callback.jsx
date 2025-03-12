import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

async function fetchAccessToken(code) {
  const response = await fetch("https://discord.com/api/oauth2/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    // bu bilgileri projenizde env klasöründe saklayınız, burada bulunması güvenilir değildir!
    body: new URLSearchParams({
      client_id: "discord_botunuzun_idsi",
      client_secret: "discord_botunuzun_secreti", // Botunuzun sayfasında OAuth2 kısmından CLIENT SECRET alanında bulabilirsiniz 
      grant_type: "authorization_code",
      code: code,
      redirect_uri: "http://localhost:5173/callback", // https://projedomaininiz.com/callback , domaininizin sonuna /callback eklemelisiniz ve bunu aynı şekilde
      // Bot panelinizde de (OAuth2 sayfasında) Redirects kısmında eklemelisiniz.
    }),
  });

  if (!response.ok) {
    throw new Error("Access token alınamadı.");
  }

  const data = await response.json();
  return data.access_token;
}

function Callback() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleCallback = async () => {
      try {
        const params = new URLSearchParams(window.location.search);
        const code = params.get("code");

        if (code) {
          const accessToken = await fetchAccessToken(code);
          localStorage.setItem("discord_access_token", accessToken);
          console.log("Access token başarıyla kaydedildi:", accessToken);
          navigate("/profile"); 
        } else {
          console.error("Code parametresi bulunamadı.");
        }
      } catch (error) {
        console.error("Hata:", error.message);
      }
    };

    handleCallback();
  }, [navigate]);

  return <div>Yükleniyor...</div>;
}

export default Callback;