import { Routes, Route, NavLink } from "react-router-dom";
import Books from "./components/Books";
import AddBook from "./components/AddBook";

function App() {
  return (
    <div>
      <header style = {{ display: "flex", gap: "20px", padding: "10px", backgroundColor: "#f0f0f0" }}>
        <NavLink to="/" style = {{ textDecoration: "none", color: "black", fontWeight: "bold" }}>Books</NavLink>
        <NavLink to="/add" style = {{ textDecoration: "none", color: "black", fontWeight: "bold" }}>Add Book</NavLink>
      </header>
     
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/add" element={<AddBook />} />
      </Routes>
    </div>
  );
}

export default App;