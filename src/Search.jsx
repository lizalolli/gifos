import "./styles.css";
import React, { useState } from "react";

export default function Search(props) {
  function actualizarSearch(e) {
    props.setSend(e.target.value);
  }

  function sugerenciaHandler(e) {
    props.setSend(e.target.innerText);
    props.setBuscar(true);
    setmostrarBajada(false);
  }

  function searchClick(e) {
    props.setBuscar(true);
    setmostrarBajada(false);
  }

  const [mostrarBajada, setmostrarBajada] = useState(true);

  return (
    <>
      <div className="container ancho-search">
        <div className="d-flex justify-content-center flex-column">
          <h1 className="text-center">
            ¡Inspírate y busca los mejores <strong>Gifs!</strong>
          </h1>
          <img
            className="imgHeader"
            alt="imagen seacrh"
            src="./images/ilustraHeader.svg"
            width="389px"
          />
        </div>
        <div className="search d-flex">
          <input
            type="text"
            className="form-control me-2"
            placeholder="Buscar"
            aria-label="Search"
            onChange={actualizarSearch}
            value={props.send}
          />
          {props.mostrarAC === true ? (
            <div className="autocompletacion">
              <ul>
                {props.sugerencias.map((sugerencia) => {
                  return <li onClick={sugerenciaHandler}>{sugerencia.name}</li>;
                })}
              </ul>
            </div>
          ) : null}
          <button className="searchButton" onClick={searchClick}>
            <img src="./images/search.png" alt="search icon" class="search-icon" />
          </button>
        </div>
        {props.loading === true ? (
          <h2 className="loader">Buscando tu gif...</h2>
        ) : null}
        {mostrarBajada === true ? (
          <h2 className="comienza-busqueda">Comienza tu búsqueda</h2>
        ) : null}
      </div>
    </>
  );
}
