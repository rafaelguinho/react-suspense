import "./App.css";
import React, { Suspense } from "react";
import ErrorBoundary from "./components/ErrorBoundary";

const Pokemons = React.lazy(() => import("./components/Pokemons"));

function App() {
  return (
    <div className="App">
      <ErrorBoundary fallback={<h2>Could not fetch pokemons.</h2>}>
        <Suspense fallback={<h1>Loading pokemons...</h1>}>
          <Pokemons />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
