import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);

  const [toys, setToys] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/toys")
      .then((response) => setToys(response.data))
      .catch((error) => console.log(error));
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function addNewToy(newToy) {
    setToys((toys) => [...toys, newToy]); // spread operator(... creates a copy of an array)

  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm addToy={addNewToy}/> : null} {/* ternary operator */}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys}/>
    </>
  );
}

export default App;
