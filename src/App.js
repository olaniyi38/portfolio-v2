import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router";
import CustomCursor from "./components/custom-cursor/CustomCursor";
import About from "./routes/about/About";
import Contact from "./routes/contact/Contact";
import Home from "./routes/home/Home";
import Navigation from "./routes/navigation/Navigation";
import Work from "./routes/work/Work";


function App() {
  const location = useLocation()
  return (
    <>
      {/* // <IntroAnim /> */}
      {/* <CustomCursor /> */}
      <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
         <Route path='/' element={ <Navigation /> }>
            <Route index element={ <Home /> } />
            <Route path="/work" element={ <Work /> } />
            <Route path="/contact" element={ <Contact /> } />
            <Route path="/about" element={ <About /> } />
         </Route>
      </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
