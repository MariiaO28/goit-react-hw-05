import { Route, Routes } from 'react-router-dom'
import {lazy} from 'react'
import Layout from '../Layout/Layout'
const HomePage = lazy(() => import('../../pages/HomePage/HomePage'))
const MoviesPage = lazy(() => import('../../pages/MoviesPage/MoviesPage'))
const MovieDetailsPage = lazy(() => import('../../pages/MovieDetailsPage/MovieDetailsPage'))
const MovieCast = lazy(() => import('../MovieCast/MovieCast'))
const MovieReviews = lazy(() => import('../MovieReviews/MovieReviews'))
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/NotFoundPage'))
import './App.css'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/movies' element={<MoviesPage />}></Route>
        <Route path='/movies/:movieId' element={<MovieDetailsPage />}>
          <Route path='cast' element={<MovieCast />}></Route>
          <Route path='reviews' element={<MovieReviews />}></Route>
        </Route>
         <Route path='*' element={<NotFoundPage />}></Route>
      </Routes>
    </Layout>
  )
}