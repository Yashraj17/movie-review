import React from "react";

const MovieCard = ({item}) => {
  return (
    <div className="mt-3 col-3" style={{height:'340px'}}>
    <div className="card border-0 shadow-5" >
      <img src={`https://www.themoviedb.org/t/p/w500/${item.poster_path}`} style={{height:'260px'}} alt="movie" />
      <div className="card-body">
        <h5>
          {item?.title}  {item?.name}
        </h5>
      </div>
    </div>
  </div>
  )
};

export default MovieCard;
