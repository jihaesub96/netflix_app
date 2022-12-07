import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import Auth from './routes/Auth'
import Footer from './components/Footer'
import Nav from './components/Nav'
import DetailPage from './routes/DetailPage'
import MainPage from './routes/MainPage'
import SearchPage from './routes/SearchPage'
import './styles/App.css'

const Layout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  )
}

const AppRouter = ({ isLoggedIn, userObj }) => {
  return (
    <div className="app">
      {isLoggedIn}
      {/* {isLoggedIn && <TabBar />} */}
      <Routes>
        {isLoggedIn ? (
          <Route path="/" element={<Layout userObj={userObj} />}>
            <Route index element={<MainPage userObj={userObj} />} />
            <Route path=":movieId" element={<DetailPage userObj={userObj} />} />
            <Route path="search" element={<SearchPage userObj={userObj} />} />
          </Route>
        ) : (
          <Route path="/Login" element={<Auth />} />
        )}
        {/* 로그인이 되었을때 true면  <Route /> false면 후자 <Route /> 
            {isLoggedIn ? <Route/> : <Route />}*/}
      </Routes>
    </div>
  )
}

export default AppRouter
