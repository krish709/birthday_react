import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import "./App.css";
import BirthdayCounter from "./BirthdayCounter";
import BirthdayWishes from "./BirthdayWishes";
import TheaterOpening from "./TheaterOpening";
import Memories from "./Memories";

function App() {
  const snowflakes = Array.from({ length: 50 });

  return (
   <HashRouter>
      <div className="container">
        {snowflakes.map((_, index) => (
          <div
            key={index}
            className="snowflake"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${5 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${10 + Math.random() * 5}px`,
            }}
          >
            ❄
          </div>
        ))}

        <div className="content">
          <Routes>
            <Route
              path="/"
              element={
                <BirthdayCounter targetDate="2026-12-25T00:00:00" />
              }
            />

            <Route
              path="/birthday-wishes"
              element={<BirthdayWishes />}
            />
            <Route
              path="/opening"
              element={<TheaterOpening />}
            />
                <Route path="/memories" element={<Memories />} />

          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;