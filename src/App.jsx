import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link, Navigate } from "react-router-dom";
import Advice from "./components/Advice";
import DisplaySavedAdv from "./components/SavedAdvice";
function App() {
  return (
    <Router>
      <nav>
        <div>
          <Link to="/">Get Advice</Link>
        </div>
        
        <div>
          <Link to="/saved">Saved Advice</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Advice />} />
        <Route path="/saved" element={<DisplaySavedAdv />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
