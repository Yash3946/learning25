import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {ContentComponent} from "./components/ContentComponent"
import HeaderComponent from './components/HeaderComponent'
import { FooterComponent } from './components/FooterComponent'
import { MapDemo1 } from './components/MapDemo1'
import { MapDemo2 } from './components/MapDemo2'


function App() {

  


  return (
    <div>
      <HeaderComponent></HeaderComponent>
      {/* <MapDemo1></MapDemo1> */}
      <MapDemo2></MapDemo2>
      {/* <ContentComponent></ContentComponent>
      <FooterComponent></FooterComponent> */}
    </div>
  )
}

export default App