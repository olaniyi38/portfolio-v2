import { Route, Routes } from "react-router";
import About from "./routes/about/About";
import Contact from "./routes/contact/Contact";
import Home from "./routes/home/Home";
import Navigation from "./routes/navigation/Navigation";
import Work from "./routes/work/Work";


function App() {
  return (
    <>
      {/* // <IntroAnim /> */}
      <Routes>
         <Route path='/' element={ <Navigation /> }>
            <Route index element={ <Home /> } />
            <Route path="/work" element={ <Work /> } />
            <Route path="/contact" element={ <Contact /> } />
            <Route path="/about" element={ <About /> } />
         </Route>
      </Routes>
    </>
  );
}

export default App;
