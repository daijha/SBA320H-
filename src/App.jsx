import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link, Navigate } from "react-router-dom";
import Advice from "./components/Advice";
import DisplaySavedAdv from "./components/SavedAdvice";
function App() {
  return (
    <>
      <nav>
        <div>
          <Link to="/">Get Reminder</Link>
        </div>
        
        <div>
          <Link to="/saved">Saved Reminders</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Advice />} />
        <Route path="/saved" element={<DisplaySavedAdv />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
