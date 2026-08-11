import { useState } from "react";

export function Show() {
  const [showMovies, setShowMovies] = useState(false);

  function handleToggleMovies() {
    setShowMovies(!showMovies);
  }
  return (
    <div className="flex justify-center">
      <button
        className="p-2 m-2 text-center bg-teal-400"
        onClick={handleToggleMovies}
      >
        Show Movies
      </button>
      {showMovies && (
        <div>
          <p>Interestellar</p>
          <p>The GodFather</p>
          <p>Matrix</p>
        </div>
      )}
    </div>
  );
}

export function ScreenMode() {
  const [darkMode, setDarkMode] = useState(false);

  function handleToggleMode() {
    setDarkMode(!darkMode);
  }
  return (
    <div
      className={`text-center rounded-2xl p-2 m-2 content-center ${darkMode ? "bg-black text-amber-50" : "bg-amber-300"}`}
    >
      <button
        className="p-2 hover:cursor-pointer hover:bg-amber-400 rounded-[10px]"
        onClick={handleToggleMode}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}
