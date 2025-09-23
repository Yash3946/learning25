import React from 'react'
import { MyButton } from '../Common/MyButton'

export const NetflixHome = () => {
  const HomeFunction =()=>
  {
    alert("Home Function called...")
  }
  return (
    <div>
        <h1>Netflixhome</h1>
        <MyButton funName={HomeFunction} name="Home" class="btn btn-info"></MyButton>
    </div>
  )
}
