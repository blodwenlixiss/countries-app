import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
        <Route path="/:lang" element={<DefaultLayout />}>
          <Route
            path="countries"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <HomePage />
              </Suspense>
            }
          />

          <Route
            path="countries/:id"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <SinglePage />
              </Suspense>
            }
          />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="" element={<Navigate to="countries" />} />
        </Route>
        <Route path="/" element={<Navigate to="en/countries" />} />
        <Route path="*" element={<span>not found</span>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
