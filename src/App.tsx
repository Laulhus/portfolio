import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import NavBar from "./components/NavBar";
import Experience from "./pages/Experience";
import Main from "./pages/Main";
import TechStack from "./pages/TechStack";
import Projects from "./pages/Projects";

function App() {
  const location = useLocation();
  return (
    <>
      <NavBar />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route index element={<Main />}></Route>
          <Route path="experience" element={<Experience />}></Route>
          <Route path="tech" element={<TechStack />}></Route>
          <Route path="projects" element={<Projects />}></Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
