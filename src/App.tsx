import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./components/layout/default/defaultLayout";
import HomePage from "./pages/home/view/index";
import About from "./pages/about/view";
import Countries from "./pages/contact/view";
import { Suspense } from "react";

function App() {
  return (
    <Suspense fallback="loading...">
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/countries" element={<Countries />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
