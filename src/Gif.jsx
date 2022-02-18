import React from "react";
import "./styles.css";

const Gif = (props) => (
  <div className="col-xs-12 col-md-4">
    <a href={props.gif.url} target="_blank" rel="noreferrer">
      <img
        className="card-img"
        src={props.gif.images.original.url}
        alt={props.gif.title}
      />
    </a>
  </div>
);

export default Gif;
