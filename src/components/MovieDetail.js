import React from "react";

const MovieDetail = (props) => {
  console.log(props.location.param1);
  return (
    <div>
      <div>{props.location.param1.Title}</div>
      <img src={props.location.param1.Poster} />
      <div>{props.location.param1.Actors}</div>
      <div>{props.location.param1.Awards}</div>
      <div style={{fontSize:30}}>{props.location.param1.Plot}</div>
    </div>
  );
};

export default MovieDetail;
