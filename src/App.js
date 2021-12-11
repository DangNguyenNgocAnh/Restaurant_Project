import "./App.css";
import BookTable from "./Page/BookTable/BookTable";
import Contact from "./Page/Contact/Contact";
import Introduce from "./Page/Introduce/Introduce";
import Menu from "./Page/Menu/Menu";
import OurTeam from "./Page/OurTeam/OurTeam";

function App() {
  return (
    <div id ='home'>
      <div className='Homepage'>
      <header className="header">
        <div className="header-top">
          <div className ='header-left'>
            <h2>COLORFUL RESTAURANT</h2>
          </div>
          <nav className='header-right'>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#menu">Menu</a>
              </li>
              <li>
                <a href="#team">Our Team</a>
              </li>
              <li>
                <a href="#order">Order Table</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <img/>
        </div>
        <div className="header-text">
          <h1>WELCOME TO OUR RESTAURANT</h1>
          <a href="#order">Order Table</a>
        </div>
      </header>
    </div>
    <div id='about'>
      <Introduce/>
    </div>
    <div id="menu">
      <Menu/>
    </div>
    <div id='order'>
      <BookTable/>
    </div>
    <div id='team'>
      <OurTeam/>
    </div>
    <div id='contact'>
      <Contact/>
    </div>
    </div>
  );
}

export default App;
