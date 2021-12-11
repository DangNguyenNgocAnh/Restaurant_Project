import "C:/Demonstration/PolyReact2021/restaurant-project/src/asset/css/Introduce.css";
function Introduce() {
  return (
    <div className="Introduce">
      <header className="header">
        <div className="title">
          <h2>OUR STORY</h2>
        </div>
        <div className="content">
          <div className="text">
            <div className="text-title">
              <h2>Our Restaurant</h2>
            </div>
            <div className="content">
              <div className = "content-text">
                <h4>
                  It's not just any old place to get a cheap bite to eat - it's
                  an experience.
                </h4>
                <p>
                  We create chef-inspired dishes with farm fresh
                  produce sourced locally when available, with the goal of being
                  sustainable in every way possible.
                </p>
                <p>
                  The most important thing about your restaurant food is the food.
                  This is not some made up dictum, but a hard truth. While this
                  may be obvious, it's also true that just because you have
                  beautiful decor and great service does not mean that your
                  customer will enjoy the flavor of the food that they are eating.
                </p>
              </div>
            </div>
            <div className="menu">
              <a href="">Our Menu</a>
            </div>
          </div>
          <div className="image">
            <img
              src="https://cdn.pixabay.com/photo/2017/01/26/02/06/platter-2009590_960_720.jpg"
              alt=""
            />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Introduce;
