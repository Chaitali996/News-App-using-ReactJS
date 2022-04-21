import React from "react";

function News({ data }) {
  return (
    <div className="container my-3">
      <div className="row">
        {data.map((value) => {
          return (
            <div className="col">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={value.urlToImage}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{value.title}</h5>
                  <p className="card-text">{value.description}</p>
                  <a
                    href={value.url}
                    target="#"
                    className="btn btn-primary">
                    Main source
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default News;
