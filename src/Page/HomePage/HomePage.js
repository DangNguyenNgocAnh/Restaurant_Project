import "C:/Demonstration/PolyReact2021/restaurant-project/src/asset/css/HomePage.css";

function Homepage() {
  return (
    <div className='Homepage'>
      <header className="header">
        <div className="header-top">
          <div className ='header-left'>
            <h2>COLORFUL RESTAURANT</h2>
          </div>
          <nav className='header-right'>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Menu</a>
              </li>
              <li>
                <a href="">Our Team</a>
              </li>
              <li>
                <a href="">Order Table</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <img/>
        </div>
        <div className="header-text">
          <h1>WELCOME TO OUR RESTAURANT</h1>
          <a href="">Order Table</a>
        </div>
      </header>
    </div>
  );
}

export default Homepage;
