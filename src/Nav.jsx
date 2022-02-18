import React from "react";

export default function Nav(props) {
  return (
    <div className={props.isDark ? "light" : "dark"}>
      <div className="container">
        <nav className="gifos_nav pt-2 pb-5">
          <img
            className="gifos_logo"
            src={`${
              props.isDark ? "/images/logo.svg" : "/images/logoNoct.svg"
            }`}
            width="59px"
            alt="logo"
          />
          <button
            onClick={() => props.setDark(!props.isDark)}
            className="btn-theme"
          >
            MODO {props.isDark ? "DARK" : "LIGHT"}
          </button>
        </nav>
      </div>
    </div>
  );
}
