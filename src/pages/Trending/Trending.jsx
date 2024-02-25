import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SingleContent from '../../components/SingleContent/SingleContent'
import './Trending.css'
import CustomPagination from '../../components/Pagination/CustomPagination'

const Trending = () => {
  const [content , setContent] = useState([])
  const [page, setPage] = useState(1)
  
  const fetchTrending = async() => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=9e508f82ba9df3850287a51fd4e245aa&page=${page}`)

    setContent(data.results)  
  }


  useEffect(() => {
    window.scroll(0,0)
    fetchTrending()
  } , [page])

  return (
    <div >
      <span className = 'pageTitle'>trending</span>
      <div className="trending">
        {
          content && content.map((e) => (
          <SingleContent 
          key = {e.id} 
          id = {e.id} 
          poster = {e.backdrop_path}
          title = {e.name || e.title}
          media_type = {e.media_type}
          date = {e.first_air_date || e.release_date}
          rating = {e.vote_average}
           />) )
        }
      </div>
      <CustomPagination setPage = {setPage}/>
    </div>
  )
}

export default Trending
