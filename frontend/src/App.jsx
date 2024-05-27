import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

const App = () => {
  return (
    <main>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </main>
  );
};
export default App;
