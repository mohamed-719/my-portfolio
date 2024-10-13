import "./topbar.scss";
// import { Person, Mail } from "@material-ui/icons"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'; 

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Mohamed Fathi
          </a>
          <div className="itemContainer">
            {/* <Person className="icon" /> */}
                  <div  className="icon">
        <FontAwesomeIcon className="icon" icon={faUser} /> 
      </div >
            <span>+201024549719</span>
          </div>
          <div className="itemContainer">
            {/* <Mail className="icon" /> */}
                  <div className="icon">
        <FontAwesomeIcon className="icon" icon={faEnvelope} />
      </div>
            <span>mohamedfathimk9719@gmail.com</span>
          </div >
              <div  className="btn" class="mt-lg-0 mt-3 mb-4 mb-lg-0">
                    <a className="download" href="https://drive.google.com/uc?id=1BjzLODvPsuUMDyH1uBk7ZFOMswDNJe1v" class="custom-btn btn" download>Download CV</a>
                </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
