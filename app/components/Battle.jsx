import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import {fetchUser } from '../util/api'
import {close} from '../icons/icon'


const Battle = () => {
    const [username , setUsername] = useState('')
    const [firstPlayer , setFirstPlayer] = useState(null)
    console.log(username)
    
    useEffect(() => {
        if(username){
            fetchUser(username)
            .then((user)=>{
                setFirstPlayer(user)
            })
        }
    },[username])
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(firstPlayer)
    }


    function Instructions() {
        return (
            <section className='instructions-container'>
            <h2>Instructions</h2>
            <ol>
                <li>Enter 2 Github Users</li>
                <li>Battle</li>
                <li>See the Winners</li>
            </ol>
            </section>
        )
    }



  return (
    <main className="stack main-stack animate-in">
    <div className="split">
        <h1>Players</h1>
        <Link 
        className={`btn primary ${true ? "disabled" : ""}`}
        >
        Battle
        </Link>
    </div>
        <section className="grid">

            {
                (firstPlayer=== null) ?
            <form className="card" onSubmit={handleSubmit}>
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
                onChange={(e)=>setUsername(e.target.value)}
              />
              <button
                className="btn link"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
          :
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
              <button className="btn secondary icon">
              {close}
              </button>
          </div>
          </article>
            }

        
        </section>
    <Instructions/>
    </main>
  )
}

export default Battle