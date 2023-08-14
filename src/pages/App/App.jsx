import { useState } from 'react'
// Add the following import
import { Routes, Route } from 'react-router-dom';
import { movies } from "../../data.js";
import ActorListPage from '../ActorListPage/ActorListPage'
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage'
import MoviesListPage from '../MoviesListPage/MoviesListPage'
import LoginPage from '../LoginPage/LoginPage'
import NavBar from '../../components/NavBar/NavBar'
import './App.css'


export default function App() {
  const [user, setUser] = useState(null)

  function signUp(name){
    setUser(name)
  }

  return (
    <main>
      <h1>REACT MOVIES</h1>
      { user ?
        <>
          <NavBar user={user}/>
          <Routes>
              <Route path="/" element={<MoviesListPage movies={movies}/>} />
              <Route path="/movies/:movieName" element={<MovieDetailPage />} />
              <Route path="/actors" element={<ActorListPage />} />
          </Routes>
        </>
        :
        <LoginPage signUp={signUp} />
      }
    </main>
  )
}

