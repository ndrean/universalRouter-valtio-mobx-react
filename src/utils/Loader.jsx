import React from "react";
import "../Styles.css";

export default function Loader() {
  console.log("loading...");
  //return <p style={{ fontSize: 30 }}>Loading...</p>;
  return (
    <div className="container">
      <div className="loader"></div>
    </div>
  );
}

/*
  <div className="container">
    <div className="sipinner"></div>
  </div>
  */
