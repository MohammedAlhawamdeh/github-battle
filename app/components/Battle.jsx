import React, { useState } from "react";
import { Link } from "react-router-dom";
import { fetchUser } from "../util/api";
import { close } from "../icons/icon";

const Battle = ({
  firstPlayer,
  setFirstPlayer,
  secondPlayer,
  setSecondPlayer,
}) => {
  const [username, setUsername] = useState("");
  const [username2, setUsername2] = useState("");
  const handleSubmit = (e, name) => {
    e.preventDefault();
    fetchUser(name)
    .then((user) => {
      if (name === username) {
        setFirstPlayer(user);
      } else if (name === username2) {
        setSecondPlayer(user);
      }
    });
  };

  function Instructions() {
    return (
      <section className="instructions-container">
        <h2>Instructions</h2>
        <ol>
          <li>Enter 2 Github Users</li>
          <li>Battle</li>
          <li>See the Winners</li>
        </ol>
      </section>
    );
  }
  const handleReset = (name) => {
    if (name === username) {
      setFirstPlayer(null);
      setUsername("");
    }
    if (name === username2) {
      setSecondPlayer(null);
      setUsername2("");
    }
  };

  return (
    <main className="stack main-stack animate-in">
      <div className="split">
        <h1>Players</h1>
        <Link
          to="/results"
          className={`btn primary ${
            firstPlayer && secondPlayer ? "" : "disabled"
          }`}
        >
          Battle
        </Link>
      </div>
      <section className="grid">
        {!firstPlayer ? (
          <form className="card" onSubmit={(e) => handleSubmit(e, username)}>
            <label htmlFor="username" className="player-label">
              Player One
            </label>
            <div className="input-row">
              <input
                type="text"
                id="username"
                placeholder="github username"
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <button className="btn link" type="submit">
                Submit
              </button>
            </div>
          </form>
        ) : (
          <article className="card">
            <h3 className="player-label">Player One</h3>
            <div className="split">
              <div className="row gap-md">
                <img
                  width={32}
                  height={32}
                  className="avatar"
                  src={firstPlayer.avatar_url}
                />
                <a href={`https://github.com/${username}`} className="link">
                  {username}
                </a>
              </div>
              <button
                className="btn secondary icon"
                onClick={() => handleReset(username)}
              >
                {close}
              </button>
            </div>
          </article>
        )}
        {!secondPlayer ? (
          <form className="card" onSubmit={(e) => handleSubmit(e, username2)}>
            <label htmlFor="username2" className="player-label">
              Player Two
            </label>
            <div className="input-row">
              <input
                type="text"
                id="username2"
                placeholder="github username"
                autoComplete="off"
                value={username2}
                onChange={(e) => setUsername2(e.target.value)}
              />
              <button className="btn link" type="submit">
                Submit
              </button>
            </div>
          </form>
        ) : (
          <article className="card">
            <h3 className="player-label">Player Two</h3>
            <div className="split">
              <div className="row gap-md">
                <img
                  width={32}
                  height={32}
                  className="avatar"
                  src={secondPlayer.avatar_url}
                />
                <a href={`https://github.com/${username2}`} className="link">
                  {username2}
                </a>
              </div>
              <button
                className="btn secondary icon"
                onClick={() => handleReset(username2)}
              >
                {close}
              </button>
            </div>
          </article>
        )}
      </section>
      <Instructions />
    </main>
  );
};

export default Battle;
