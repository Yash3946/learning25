import React from 'react'
import { useParams } from 'react-router-dom'

export const WatchContent = () => {
    var name = useParams().name
  return (
    <div>
        <h1>Watching content !!! {name}</h1>
    </div>
  )
}
