import "./styles.css";
import React from "react";
import Gif from "./Gif";
import Error from "./Error";

export default function Gifs(props) {
  return (
    <div className="gifs">
      {props.cargaInicial && (
        <div className="gallery-container">
          <div className="container">
            <h4 className="text-center my-5">Resultados de la búsqueda</h4>
            <div className="row row-gifs">
              {props.gifs.length ? (
                props.gifs.map((gif, i) => {
                  return <Gif key={i} gif={gif} />;
                })
              ) : (
                <Error />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
