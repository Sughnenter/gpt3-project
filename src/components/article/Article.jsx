import React from 'react'
import './Article.css'

function Article ({imageUrl, date, title}) {
  return (
    <div className='gpt3__blog-container_article'>
      <div className='gpt3__blog-container_article-image'>
        <img src={imageUrl} alt="blog image" />
      </div>
    </div>
  )
}

export default Article