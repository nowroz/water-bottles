import { Suspense } from "react";
import "./App.css";
import Bottles from "./components/bottles/Bottles";
import { fetchJSONPromise } from "./utils/api";

function App() {
  const bottlesPromise = fetchJSONPromise("./bottles.json");

  return (
    <Suspense>
      <Bottles bottlesPromise={bottlesPromise}></Bottles>
    </Suspense>
  );
}

export default App;
