import { useState } from "react";

import { AppRouter } from "@/routes/routes";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <>
      <button onClick={() => setIsAuthenticated(!isAuthenticated)}>
        Change Auth
      </button>
      <p>{isAuthenticated ? "Auth" : "Not auth"}</p>

      <AppRouter isAuthenticated={isAuthenticated} />
    </>
  );
}

export default App;
