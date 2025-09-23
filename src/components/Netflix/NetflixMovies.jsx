import React from 'react'
import { MyButton } from '../Common/MyButton'

export const NetflixMovies = () => {
  const MoviesFunction =()=>
  {
    alert("MoviesFunction is called...")
  }
  return (
    
    <div>
        <h1>NetflixMovies</h1>
        <MyButton name="Movies" funName={MoviesFunction}></MyButton>
    </div>
  )
}
