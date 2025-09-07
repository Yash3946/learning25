import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import {ContentComponent} from "./components/ContentComponent"
import HeaderComponent from './components/HeaderComponent'
import { FooterComponent } from './components/FooterComponent'
import { MapDemo1 } from './components/MapDemo1'
import { MapDemo2 } from './components/MapDemo2'
import { MapDemo3 } from './components/MapDemo3'
import { MapDemo4 } from './components/MapDemo4'
import { Users } from './components/Users'
import { UseStateDemo } from './components/UseStateDemo'
import { UseStateDemo2 } from './components/UseStateDemo2'
import UseStateDemo3 from './components/UseStateDemo3'
import { Students } from './components/Students'
import { StudentList } from './components/StudentList'
import { Employees } from './components/Employees'
import { Doctor } from './components/Doctor'
import { Navbar } from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import { NetflixHome } from './components/Netflix/Netflixhome'
import { NetflixMovies } from './components/Netflix/NetflixMovies'
import { Erorr404 } from './components/Erorr404'
import { WatchContent } from './components/Netflix/WatchContent'
import { NetflixShows } from './components/Netflix/NetflixShows'


function App() {

  var title = "React Js"
  return (
    <div style={{textAlign:'center'}}>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element ={<Students/>}></Route>
        <Route path='/netflixhome' element={<NetflixHome/>}></Route>
        <Route path='/netflixmovies' element={<NetflixMovies/>}></Route>
        <Route path='/netflixshows' element = {<NetflixShows/>}></Route>
        <Route path='/watch/:name' element = {<WatchContent/>}></Route>
        <Route path='/*' element={<Erorr404/>}></Route>
      </Routes>
    </div>
  )
}

export default App