import Content from "./Content/Content";
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Join from "./Join/Join";
import Cart from "./Cart/Cart";
import Categories from "./Categories/Categories";

function App() {
  return (
    // <Suspense fallback={<div>Loading...</div>}>
    //   <Routes>
    //     <Route element={<Join />} path={"/"} />
    //     <Route element={<Content />} path={"/content"} />
    //     <Route element={<Cart />} path={"/content/cart"} />
    //   </Routes>
    // </Suspense>
    <Content />
  );
}

export default App;
