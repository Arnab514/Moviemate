import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SingleContent from '../../components/SingleContent/SingleContent'
import CustomPagination from '../../components/Pagination/CustomPagination'
import Genres from '../../components/Genres'

const Movies = () => {

  const [page , setPage] = useState(1)
  const [content , setContent] = useState([])
  const [pageCount , setPageCount] = useState()
  const [genres, setGenres] = useState([])
  const [selectedGenres, setSelectedGenres] = useState([])
  
  const fetchMovies = async() => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=9e508f82ba9df3850287a51fd4e245aa&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`)

    // console.log(data.results);
    setContent(data.results)
    setPageCount(data.total_pages)
  }

  useEffect(() => {
    fetchMovies()
  } , [page])


  return (

    <div>
      <span className='pageTitle'>Movies</span>
      
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
          poster = {e.backdrop_path}
          title = {e.title}
          media_type = "movie"
          date = {e.release_date}
          rating = {e.vote_average}
           />) )
        }
      </div>
      {pageCount > 1 && <CustomPagination setPage = {setPage} pageCount={pageCount}/>}
    </div>
  )
}

export default Movies
