import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
<div id="container">
  <h1>Hello React Router!</h1>
  <div id="navbar">{/* navigation here */}</div>
  <div id="main-section">
    <Routes>
      <Route path="/blue" element={<h1>Blue</h1>} />
      <Route path="/red" element={<h1>Red</h1>} />
      <Route path="/home" element={<h1>Home</h1>} />
    </Routes>
  </div>
</div>;

export default App;
