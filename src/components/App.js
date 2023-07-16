
import React, { useState } from "react";
import './../styles/App.css';
import ChildComponent from "./ChildComponent";

const App = () => {

  const [showModal, setShowModal] = useState(false);

  const ClickHandel = () => {
    setShowModal(true);
  }
  return (
    <div className="parent">
        {/* Do not remove the main div */}
        <h1>parent Component</h1>
        <ChildComponent showModal = {showModal} ClickHandel = {ClickHandel} />
    </div>
  );
}

export default App
