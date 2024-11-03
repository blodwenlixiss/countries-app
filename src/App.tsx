import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
  useParams,
} from "react-router-dom";
import About from "./pages/about/view";
import Contact from "./pages/contact/view";
import { lazy, Suspense } from "react";
// import { LangGuard } from "./components/langGuard/langGuard";
import { locale, defaultLocation } from "./components/utilities/util";
import { DefaultLayout } from "./components/langGuard/langGuard";

const HomePage = lazy(() => import("./pages/home/view/initalPage/index"));
// const SinglePage = lazy(() => import("./pages/home/view/singlePage"));

const LangGuard: React.FC = () => {
  const params = useParams();
  const lang = params.lang as string;
  if (!locale.includes(lang)) {
    return <Navigate to={`/${defaultLocation}`} />;
  }

  return <Outlet />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={`/${defaultLocation}`} />} />
        <Route path="/:lang" element={<LangGuard />}>
          <Route element={<DefaultLayout />}>
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
                  {/* <SinglePage /> */}
                  <div>s</div>
                </Suspense>
              }
            />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="" element={<Navigate to="countries" />} />
          </Route>
        </Route>
        <Route path="*" element={<span>not found</span>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
