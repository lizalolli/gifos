import "./styles.css";
import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Search from "./Search";
import Gifs from "./Gifs";

export default function App(props) {
  const [isDark, setDark] = useState(true); // bandera
  const [gifs, setGifs] = useState([]);
  const [buscar, setBuscar] = useState(false);
  const [cargaInicial, setcargaInicial] = useState(false);
  const [send, setSend] = useState("");
  const [mostrarAC, setMostrarAC] = useState(false);
  const [loading, setLoading] = useState(false);
  const [gifSugerido, setGifSugerido] = useState("");
  const [sugerencias, setSugerencias] = useState([]);

  //fetch de buscar
  useEffect(() => {
    if (buscar) {
      console.clear();
      let peticion = fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=HtOUpRZDcmXvVqvEaGJaNMNJlk1kaGxP&q=${send}&limit=15&offset=0&rating=g&lang=en`
      );
      setLoading(true);
      peticion
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setGifs(res.data);
          setLoading(false);
          setBuscar(false);
          setcargaInicial(true);
          setSend("");
        })
        .catch((error) => {
          console.log("algo salio mal");
        });
    }
  }, [buscar, send]);

  //fetch que trae sugerencias
  useEffect(() => {
    if (send) {
      setMostrarAC(true);
    } else {
      setMostrarAC(false);
    }
    let peticion = fetch(
      `https://api.giphy.com/v1/gifs/search/tags?api_key=ORUvHzMJUGPFdV2kpkG8zMrjgFs9BnKL&q=${send}&limit=5&offset=0&rating=g&lang=en`
    );

    peticion
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setSugerencias(res.data);
        console.log(res);
      });
  }, [send]);

  return (
    <div>
      <div className={`App ${isDark ? "light" : "dark"}`}>
        <Nav isDark={isDark} setDark={setDark} />
        <Search
          loading={loading}
          gifs={gifs}
          setGifs={setGifs}
          send={send}
          setSend={setSend}
          buscar={buscar}
          setBuscar={setBuscar}
          mostrarAC={mostrarAC}
          setMostrarAC={setMostrarAC}
          sugerencias={sugerencias}
          gifSugerido={gifSugerido}
          setGifSugerido={setGifSugerido}
        />
        <Gifs
          gifs={gifs}
          setGifs={setGifs}
          send={send}
          setSend={setSend}
          buscar={buscar}
          buscarGifs={setBuscar}
          mostrarAC={mostrarAC}
          setMostrarAC={setMostrarAC}
          cargaInicial={cargaInicial}
        />
      </div>
    </div>
  );
}
