import React from 'react'
import { Link } from 'react-router-dom'
export const NetflixShows = () => {

    var shows = [
        {
                id:101,
                name:"coolie",
                rating:10.0,
                imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ6dPaZyvcybpO-KpgZHerzhZ4zYItpC6iJw&s",
            },
            {
                id:102,
                name:"war2",
                rating:8.0,
                imageUrl:"https://m.media-amazon.com/images/M/MV5BNjY5OTg4NTYtZjVkZS00YTZmLWIwNDEtM2Y0ODQyMzM2NTJiXkEyXkFqcGc@._V1_.jpg",
            },
            {
                id:103,
                name:"kgf2",
                rating:9.0,
                imageUrl:"https://m.media-amazon.com/images/M/MV5BZmQzZjVkZTUtYjI4ZC00ZDJmLWI0ZDUtZTFmMGM1Mzc5ZjIyXkEyXkFqcGc@._V1_.jpg",
            },
            {
                id:104,
                name:"pushpa2",
                rating:10.0,
                imageUrl:"https://m.media-amazon.com/images/M/MV5BZjllNTdiM2QtYjQ0Ni00ZGM1LWFlYmUtNWY0YjMzYWIxOTYxXkEyXkFqcGc@._V1_.jpg",
            },
        ]
        return (
          <div>
              <h1>NETFLIX SHOWS</h1>
              <div className='container'>
                <div className='row'>
                  {
                    shows.map((show)=>{
                      return <div className='card' style={{height:"30vh",width:"190px", margin:"auto"}}>
                          <h1>Title: {show.name}</h1>
                          <img src={show.imageUrl} style={{height:"100px",width:"100px"}}></img>
                          <Link to={`/watch/${show.name}`} className='btn btn-warning'>WATCH</Link>
                      </div>
                    })
                  }
                </div>
                </div>
    </div>
  )
}

