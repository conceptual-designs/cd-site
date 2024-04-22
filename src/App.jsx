import { Routes, Route } from "react-router-dom";

// Pages
import { Home } from "@pages/Home";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<h1>404, Not Found</h1>} />
    </Routes>
  );
}
