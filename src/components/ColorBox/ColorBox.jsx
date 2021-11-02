import React from "react";
import "./style.css";

export default function ColorBox({ backgroundColor }) {
  return (
    <>
      <div className="preview" style={{ backgroundColor }}></div>
      <h4>{`Meu background é: ${backgroundColor}`}</h4>
    </>
  );
}
