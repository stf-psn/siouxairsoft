import React from "react";
import "./Home.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom"; // Importa Link per la navigazione

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function Home() {
  return (
    <>
      <div className="home-container">
        <div className="left-section">
          <h2 id="leftdivsubtitle">UN NUOVO MODO DI GIOCARE</h2>
          <p id="leftdivtext">
            Scopri il Team Sioux, dove strategia incontra divertimento! <br></br>
            Gioca con gli amici, trovane di nuovi e crea ricordi indimenticabili.
          </p>
          <Button
            id="ctaentranelteam"
            variant="contained" /* bottone da colorare di nero !!! */
            sx={{ borderRadius: 20, backgroundColor: "#000"}} /* Add this to make the button rounded */
          >
            <Link
              to="/entranelteam"
              style={{
                textDecoration: "none",
                fontFamily: "Helvetica, Arial, sans-serif",
                color: "#fff"
                
              }}
            >
              <b>ENTRA NEL TEAM</b>
            </Link>
          </Button>
        </div>
        <div className="right-section">
          <img
            src="https://i.ibb.co/Fs02vD2/example-gif.gif"
            width="100%"
            height="100%"
            object-fit="cover" /* Add this to scale the image */
          />
        </div>
      </div>

      <div className="content-container">
        <h2 id="content-title">Qualcosa su di noi</h2>
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/u93ihDpmz2c"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <p id="content-subtitle"><b>Sioux Airsoft</b>: Dove ogni <b>membro</b> è essenziale. Un Tributo alla forza della <b>comunità</b>.</p>
      </div>

    </>
    
  );
}

export default Home;