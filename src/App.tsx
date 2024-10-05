import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./components/layout/default/defaultLayout";
import About from "./pages/about/view";
import Countries from "./pages/contact/view";
import { lazy, Suspense } from "react";
import SinglePage from "./pages/home/view/singlePage";
const HomePage = lazy(() => import("./pages/home/view/initalPage/index"));
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route
            path="/"
            element={
              <Suspense fallback="loading...">
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path="/:id"
            element={
              <Suspense fallback="loading...">
                <SinglePage />
              </Suspense>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/countries" element={<Countries />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
