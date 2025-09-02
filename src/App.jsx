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


function App() {

  var title = "React Js"
  return (
    <div>
      <HeaderComponent title = {title}></HeaderComponent>
      {/* <Users apptitle = {title}></Users> */}
    {/* <UseStateDemo></UseStateDemo> */}
    {/* <UseStateDemo2></UseStateDemo2> */}
    {/* <UseStateDemo3></UseStateDemo3> */}
    {/* <Students></Students> */}
    {/* <Employees></Employees> */}
    <Doctor></Doctor>
    </div>
  )
}

export default App