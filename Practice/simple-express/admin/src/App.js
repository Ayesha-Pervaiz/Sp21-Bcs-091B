import TopBar from "./components/TopBar";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./screens/Login";
import HomePage from "./screens/HomePage";
import SortExample from "./screens/SortExample";
import ListBooks from "./screens/ListBooks";
function App() {
  return (
    <div>
      <BrowserRouter>
        <TopBar />
        <div className="container">
          <Routes>
            <Route path="/books" element={<ListBooks />} />
            <Route path="/sort-example" element={<SortExample />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
