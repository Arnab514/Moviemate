import React from 'react'
import { img_300, unavailable } from '../../config/config'
import "./SingleContent.css"
import { Badge } from '@mui/material'

const SingleContent = ({ id, poster, title, media_type, date, rating}) => {
  return (
    <div className='media'>
      <Badge badgeContent = {rating} color = { rating > 6 ? "primary" : "secondary"} />
      <img className='poster' src = {poster ? `${img_300}/${poster}` : unavailable } alt = {title}/>
      <b className='title'>{title}</b>
      <span className='subTitle'>
        {media_type === 'tv' ? "TV Series" : "Movie" }
        <span className='subTitle'> {date} </span>
      </span>
    </div>
  )
}

export default SingleContent
