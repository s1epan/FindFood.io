import Content from "./Content/Content";
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Join from "./Join/Join";
import Cart from "./Cart/Cart";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<Join />} path={"/"} />
        <Route element={<Content />} path={"/content"} />
        <Route element={<Cart />} path={"/cart"} />
        <Route element={<Cart />} path={"/categories"} />
      </Routes>
    </Suspense>
  );
}

export default App;
