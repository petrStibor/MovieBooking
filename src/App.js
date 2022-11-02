import { MainScreen } from "./Components/MainScreen";
import { Seats } from "./Components/Seats";
import { Ticket } from "./Components/Ticket";
import { NotFound } from "./Components/NotFound";
import { Route, Routes, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="container">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movie">Seats</Link>
        </li>
        <li>
          <Link to="/yourticket">My tickets</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/movie" element={<Seats />} />
        <Route path="/yourticket" element={<Ticket />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
