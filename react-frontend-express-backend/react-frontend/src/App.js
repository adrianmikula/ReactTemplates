import React, { useState, useEffect } from "react";
import ErrorBoundary from "./ErrorBoundary";
import './styles/App.css';


export default function App() {

// initialise the state hooks
  const [listVisible, setListVisible] = useState(true);
  const [cardVisible, setCardVisible] = useState(false);
  const [playersData, setPlayersData] = useState([]);
  const [playerData, setPlayerData] = useState({});


  // fetch the list of players after we mount the component
  useEffect(() => {
    console.log("getting full list of players")
    fetch(`${process.env.REACT_APP_BACKEND_URL}:${process.env.REACT_APP_BACKEND_PORT}/players/all`)
      .then((response) => response.json())
      .then((responseJson) => {
        setPlayersData(responseJson.data);
        showAllPlayersList();
      });
  }, []);

  // function to show a single player's data
  let showSinglePlayerCard = (id) => {
    console.log("getting details for player " + id)
    fetch(`${process.env.REACT_APP_BACKEND_URL}:${process.env.REACT_APP_BACKEND_PORT}/players/${id}`)
      .then((response) => response.json())
      .then((responseJson) => {
        setPlayerData(responseJson.data);
        setListVisible(false);
        setCardVisible(true);
      });
  };

  // function to show the list of all players
  let showAllPlayersList = () => {
    setCardVisible(false);
    setListVisible(true);
  };

  return (
    <div className="App">
    
      <header className="App-header">
        <h1>React.JS Frontend with Express.JS Backend</h1>
        <p>By Adrian Mikula</p>
      </header>

      {!playersData && !playerData ? (
        <p>Loading player data</p>
      ) : null}

      { /* show the list of all players, if visible */ }
      {listVisible && playersData ? (
        <div className="list-group">
          <h5 class="card-title">All Players</h5>
          {playersData.map((player) => (
            <li
              onClick={() => showSinglePlayerCard(player._id)}
              className="list-group-item list-group-item-action"
            >
              {player.name}
            </li>
          ))}
        </div>
      ) : null}

      { /* show a card with a single payer's details, if visible */ }
      {cardVisible && playerData ? (
        <div class="card" style={{ width: "18rem", textAlign:'center' }}>
          <div class="card-body">
            <h5 class="card-title">Player: {playerData.name}</h5>
            <p class="card-text">Runs: {playerData.runs}</p>
            <div onClick={() => showAllPlayersList()} class="btn btn-primary">
              Back
            </div>
          </div>
        </div>
      ) : null}

    </div>
)

}
