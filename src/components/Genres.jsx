import { Chip } from '@mui/material'
import axios from 'axios'
import React, { useEffect } from 'react'

const Genres = ({type, selectedGenres, setSelectedGenres, genres, setGenres, setPage}) => {

    const fetchGenres = async() => {
        const {data} = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=9e508f82ba9df3850287a51fd4e245aa&language=en-US`)

        console.log(data.genres)
        setGenres(data.genres)

    }

    useEffect(() => {
        fetchGenres()

        // return () => {
        //     setGenres({})
        // }
    } , [])

    const handleAdd = (genre) => {
      setSelectedGenres([...selectedGenres , genre])
      setGenres(genres.filter((g) => g.id !== genre.id ))
      setPage(1)
    }

    const handleRemove = (genre) => {
      setSelectedGenres(
        selectedGenres.filter((g) => g.id !== genre.id )
      )
      setGenres([...genres , genre])
      setPage(1)
    }

  return (
    <div style={{padding: "6px 0px"}}>
      {selectedGenres && selectedGenres.map((genre) => (
        <Chip
          style={{ margin: 2 }}
          label={genre.name}
          key={genre.id}
          clickable
          size="small"
          color='primary'
          onDelete={() => handleRemove(genre)}
        />
      ))}
      {genres && genres.map((genre) => (
        <Chip
          style={{ margin: 2, backgroundColor: 'whitesmoke' }}
          label={genre.name}
          key={genre.id}
          clickable
          size="small"
          onClick={() => handleAdd(genre)}
        />
      ))}
    </div>
  )
}

export default Genres
