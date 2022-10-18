import React from 'react'
import { Link } from "react-router-dom"
import {getRepos} from '../util/api'


const Results = ({firstPlayer,secondPlayer ,setFirstPlayer , setSecondPlayer}) => {
  const [firstPlayerRepo , setFirstPlayerRepo ] = React.useState(null)
  const [secondPlayerRepo , setSecondPlayerRepo ] = React.useState(null)
  const [isCalculating , setIsCalculating ] = React.useState(true)

  React.useEffect(()=>{
    if(firstPlayer){
      getRepos(firstPlayer.login)
      .then(data => setFirstPlayerRepo(data))
      getRepos(secondPlayer.login)
      .then(data => setSecondPlayerRepo(data))
    }
  },[firstPlayer , secondPlayer])
  function firstPlayerCountStars(){
    return firstPlayerRepo?.reduce((count , state)=>{
      return count + state.stargazers_count
    },0)
  }
  function secondPlayerCountStars(){
    return secondPlayerRepo?.reduce((count , state)=>{
      return count + state.stargazers_count
    },0)
  }

  function caluculateFinalResultFirstPlayer(){
    if(firstPlayerCountStars() !== undefined){
      return firstPlayerCountStars() + Number(firstPlayer?.followers)
    }
  }
  function caluculateFinalResultSecondPlayer(){
    if(secondPlayerCountStars() !== undefined){
      return secondPlayerCountStars() + Number(secondPlayer?.followers)
    }
  }
  function handleReset(){
    setFirstPlayer(null)
    setSecondPlayer(null)
  }
  
  
  

  return (
    <main className="animate-in stack main-stack">
      <div className="split">
        <h1>Results</h1>
        <Link className="btn secondary" to="/battle" onClick={handleReset}>
          Reset
        </Link>
      </div>
      <section className="grid">
        <article className="results-container">
          <div className="card bg-light">
            <header className="split">
              <div>
                <h4>
                  <a href={firstPlayer?.html_url}>{firstPlayer?.login}</a>
                </h4>
                <p>{firstPlayer?.location || "unknown"}</p>
              </div>
              <img
                className="avatar large"
                src={firstPlayer?.avatar_url}
                alt={`Avatar for ${firstPlayer?.login}`}
              />
            </header>
            <ul className="stack">
              <li className="split">
                <span>Name:</span> <span>{firstPlayer?.login || "n/a"}</span>
              </li>
              <li className="split">
                <span>Company:</span> <span>{firstPlayer?.company || "n/a"}</span>
              </li>
              <li className="split">
                <span>Followers:</span> <span>{firstPlayer?.followers}</span>
              </li>
              <li className="split">
                <span>Following:</span> <span>{firstPlayer?.following}</span>
              </li>
              <li className="split">
                <span>Repositories:</span> <span>{firstPlayer?.public_repos}</span>
              </li>
            </ul>
          </div>
          <p className="results">
            <span>
              {caluculateFinalResultFirstPlayer()}
            </span>
          </p>
          {(caluculateFinalResultFirstPlayer() > caluculateFinalResultSecondPlayer())? <h4 className="results">Winner is {firstPlayer.login}</h4>:''}
          </article>
          <article className="results-container">
            <div className="card bg-light">
            <header className="split">
              <div>
                <h4>
                  <a href={secondPlayer?.html_url}>{secondPlayer?.login}</a>
                </h4>
                <p>{secondPlayer?.location || "unknown"}</p>
              </div>
              <img
                className="avatar large"
                src={secondPlayer?.avatar_url}
                alt={`Avatar for ${secondPlayer?.login}`}
              />
            </header>
            <ul className="stack">
              <li className="split">
                <span>Name:</span> <span>{secondPlayer?.login || "n/a"}</span>
              </li>
              <li className="split">
                <span>Company:</span> <span>{secondPlayer?.company || "n/a"}</span>
              </li>
              <li className="split">
                <span>Followers:</span> <span>{secondPlayer?.followers}</span>
              </li>
              <li className="split">
                <span>Following:</span> <span>{secondPlayer?.following}</span>
              </li>
              <li className="split">
                <span>Repositories:</span> <span>{secondPlayer?.public_repos}</span>
              </li>
            </ul>
          </div>
          {
            !isCalculating && (<p className="results">
            <span>
              {caluculateFinalResultSecondPlayer()}
            </span>
          </p>)
          }
          {(caluculateFinalResultFirstPlayer() < caluculateFinalResultSecondPlayer())?<h4 className="results">Winner is {secondPlayer.login}</h4>:''}
          </article>
      </section>
          {(caluculateFinalResultFirstPlayer() === caluculateFinalResultSecondPlayer())? <h4 className="tie">It is a Tie</h4>:''}
    </main>
    )
}

export default Results