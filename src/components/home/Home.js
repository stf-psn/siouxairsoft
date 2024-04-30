import React from 'react';
import './Home.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'; // Importa Link per la navigazione

function Home() {
  return (
    <div className="home-container">
      <div className="left-section">
        <h2 id="leftdivsubtitle">UN NUOVO MODO DI GIOCARE</h2>
        <p id="leftdivtext">Scopri il Team Sioux, dove strategia incontra divertimento! <br>
        </br>Gioca con gli amici, trovane di nuovi e crea ricordi indimenticabili.</p>
        <Button
  id="ctaentranelteam"
  variant="contained"
  sx={{ borderRadius: 20 }} /* Add this to make the button rounded */
>
<Link to="/entranelteam" style={{ textDecoration: 'none', fontFamily: 'Helvetica, Arial, sans-serif', color: '#fff'}}><b>ENTRA NEL TEAM</b></Link>
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
  );
}

export default Home;