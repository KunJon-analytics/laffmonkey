import { useState, useEffect } from "react";
import "./App.css";
import CollectionCard from "./components/CollectionCard";
import Header from "./components/Header";
import { axios } from "axios";

function App() {
  return (
    <div className="app">
      <Header />
      <CollectionCard
        id={0}
        name={"Foxy Hunt"}
        traits={7}
        image="https://firebasestorage.googleapis.com/v0/b/humswap-7d740.appspot.com/o/ants%2Fimages%2F1509.png?alt=media&token=5540d96e-4a83-44b0-8cdb-c96394e43166"
      />
    </div>
  );
}

export default App;
