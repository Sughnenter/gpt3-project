import React from "react";
import "./Article.css";

function Article({ imgUrl, date, text }) {
  return (
    <div className="gpt3__blog-container_article reveal">
      <div
        className="gpt3__blog-container_article-image reveal"
        data-animation="fade-left"
      >
        <img src={imgUrl} alt="blog_image" />
      </div>
      <div
        className="gpt3__blog-container_article-content reveal"
        data-animation="fade-right"
      >
        <div>
          <p>{date}</p>
          <h3>{text}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
}

export default Article;
