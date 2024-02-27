import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SingleContent from '../../components/SingleContent/SingleContent'
import CustomPagination from '../../components/Pagination/CustomPagination'
import Genres from '../../components/Genres'
import useGenre from '../../hooks/useGenre'

const Movies = () => {

  const [page , setPage] = useState(1)
  const [content , setContent] = useState([])
  const [pageCount , setPageCount] = useState()
  const [genres, setGenres] = useState([])
  const [selectedGenres, setSelectedGenres] = useState([])
  const genreforURL = useGenre(selectedGenres);
  
  const fetchMovies = async() => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=9e508f82ba9df3850287a51fd4e245aa&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`)

    // console.log(data.results);
    setContent(data.results)
    setPageCount(data.total_pages)
  }

  useEffect(() => {
    window.scroll(0,0)
    fetchMovies()
  } , [genreforURL , page])


  return (

    <div>
      <span className='pageTitle'>TV Shows</span>
      
      <Genres type = 'movie'
      selectedGenres = {selectedGenres}
      setSelectedGenres = {setSelectedGenres}
      genres = {genres}
      setGenres = {setGenres}
      setPage = {setPage} />

      <div className="trending">
        {
          content && content.map((e) => (
          <SingleContent 
          key = {e.id} 
          id = {e.id} 
          poster = {e.poster_path}
          title = {e.name || e.title}
          media_type = "tv"
          date = {e.first_air_date || e.release_date}
          rating = {e.vote_average}
           />) )
        }
      </div>
      {pageCount > 1 ? <CustomPagination setPage = {setPage} pageCount={pageCount}/> : <span>No more pages found</span>}
    </div>
  )
}

export default Movies
