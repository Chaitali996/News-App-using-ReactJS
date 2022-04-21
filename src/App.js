// import "./styles.css";
import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import News from './Components/News.js'


function App() {
  const [text, setText] = useState("business")
  const [news, setNews] = useState( [] )

  const changeText = (event) => {
    setText(event.target.value);
  }
  const fetchNews = async () => {
    let response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=in&category=${text}&apiKey=e037318ca9924fd5ac3a73c9d427c2c0`)
    console.log(response.data.articles);
    setNews(response.data.articles)
  }

  return (
    <>
      <h1 className="text-center my-2">News App using React JS</h1>
      <div className="container my-5">
        <div className="row">
          <div className="col-9">
            <input
              type="text"
              className="form-control"
              value={text}
              onChange={changeText}
            />
          </div>
          <div className="col-3">
            <button className="btn btn-primary" onClick={fetchNews}>
              Fetch News
            </button>
          </div>
        </div>
      </div>
      {
          news?.length > 0 ? (<News data={news} />) : (<h3 className="text-center">no news</h3>)
      }
      
    </>
  )
}
export default App