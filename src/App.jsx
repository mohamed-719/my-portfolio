import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Into"
import Portfolio from "./components/portfolio/Portfolio"
import Works from "./components/works/Works"
import Testimonials from "./components/testimonials/Testimonials"
import Contact from "./components/contact/Contact"
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";
import WorkExperience from "./components/workExperience/WorkExperience";
import About  from "./components/about/About";
import Education from "./components/education/Education";

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <About/>
        <WorkExperience/>
        <Education/>
        <Portfolio/>
        {/* <Works/> */}
        {/* <Testimonials/> */}
        <Contact/>
      </div>
    </div>
  );
}

export default App;
