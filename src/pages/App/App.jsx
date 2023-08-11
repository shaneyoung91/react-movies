import { useState } from 'react'
// Add the following import
import { Routes, Route } from 'react-router-dom';
import ActorListPage from '../ActorListPage/ActorListPage'
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage'
import MoviesListPage from '../MoviesListPage/MoviesListPage'
import LoginPage from '../LoginPage/LoginPage'
import NavBar from '../../components/NavBar/NavBar'
import './App.css'

export default function App() {
  const [user, setUser] = useState(null)

  return (
    <main>
      { user ?
        <>
          <NavBar user={user}/>
          <Routes>
              <Route path="/" element={<MoviesListPage />} />
              <Route path="/movies/:movieName" element={<MovieDetailPage />} />
              <Route path="/actors" element={<ActorListPage />} />
          </Routes>
        </>
        :
        <LoginPage setUser={setUser} />
      }
    </main>
  )
}

