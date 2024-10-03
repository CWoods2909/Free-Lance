import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Portfolio from "./pages/Portfolio";
// import AboutUs from "./pages/AboutUs";
// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";
import Layout from "./pages/Layout";
import Main from "./components/Main";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={< Main />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

