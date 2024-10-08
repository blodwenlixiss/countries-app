import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./components/layout/default/defaultLayout";
import About from "./pages/about/view";
import Contact from "./pages/contact/view";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("./pages/home/view/initalPage/index"));
const SinglePage = lazy(() => import("./pages/home/view/singlePage"));

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
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
