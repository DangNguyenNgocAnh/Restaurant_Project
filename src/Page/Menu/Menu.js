import "C:/Demonstration/PolyReact2021/restaurant-project/src/asset/css/Menu.css";
import MenuItem from "C:/Demonstration/PolyReact2021/restaurant-project/src/component/MenuItem/MenuItem";
import React, { Component } from "react";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = blog;
  }
  render() {
    return (
      <div className="menu">
        <header className="header">
          <div className="title">
            <h2>Menu</h2>
            <p>Check Our Tasty Menu</p>
          </div>
        <div className = "menu-ht">
          <div className="menu-content">
            <MenuItem itemMenu = {this.state.MenuItem1}/>
            <MenuItem itemMenu = {this.state.MenuItem2}/>
            <MenuItem itemMenu = {this.state.MenuItem3}/>

          </div>
          <div className="menu-content">
            <MenuItem itemMenu = {this.state.MenuItem4}/>
            <MenuItem itemMenu = {this.state.MenuItem5}/>
            <MenuItem itemMenu = {this.state.MenuItem6}/>
          </div>
          <div className="menu-content">
            <MenuItem itemMenu = {this.state.MenuItem7}/>
            <MenuItem itemMenu = {this.state.MenuItem8}/>
            <MenuItem itemMenu = {this.state.MenuItem9}/>
          </div>
          <div className="menu-content">
            <MenuItem itemMenu = {this.state.MenuItem4}/>
            <MenuItem itemMenu = {this.state.MenuItem2}/>
            <MenuItem itemMenu = {this.state.MenuItem8}/>
          </div>
          </div>
        </header>
      </div>
    );
  }
}
export default Menu;
const blog= {
  MenuItem1:[
    {
      src:"https://cdnimg.vietnamplus.vn/uploaded/ngtmbh/2019_12_19/battongnucuoicuabanvoicachlamtrangrangbangcacnguyenlieudongiantrangrangbangnuocgao021537172872880width600height450.jpg" ,
      name:"Lobster Roll",
      ingredients:"Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll",
      price:"$12.9"
    },
   
  ],
  MenuItem2:[
    {
      src:"https://cdnimg.vietnamplus.vn/uploaded/ngtmbh/2019_12_19/battongnucuoicuabanvoicachlamtrangrangbangcacnguyenlieudongiantrangrangbangnuocgao021537172872880width600height450.jpg" ,
      name:"Lobster Bisque",
      ingredients:"Lorem, deren, trataro, filede, nerada",
      price:"$5.95"
    },
    
  ],
  MenuItem3:[
    {
      src:"https://cdnimg.vietnamplus.vn/uploaded/ngtmbh/2019_12_19/battongnucuoicuabanvoicachlamtrangrangbangcacnguyenlieudongiantrangrangbangnuocgao021537172872880width600height450.jpg" ,
      name:"Break",
      ingredients:"something",
      price:"$39"
    },
  ],
  MenuItem4:[
    {
      src:"https://cdnimg.vietnamplus.vn/uploaded/ngtmbh/2019_12_19/battongnucuoicuabanvoicachlamtrangrangbangcacnguyenlieudongiantrangrangbangnuocgao021537172872880width600height450.jpg" ,
      name:"Bread Barrel",
      ingredients:"Lorem, deren, trataro, filede, nerada",
      price:"$6.95"
    }
  ],
  MenuItem5:[
    {
      src:"https://cdnimg.vietnamplus.vn/uploaded/ngtmbh/2019_12_19/battongnucuoicuabanvoicachlamtrangrangbangcacnguyenlieudongiantrangrangbangnuocgao021537172872880width600height450.jpg" ,
      name:"Crab Cake",
      ingredients:"A delicate crab cake served on a toasted roll with lettuce and tartar sauce",
      price:"$7.9"
    }
  ],
  MenuItem6:[
    {
      src:"https://cdnimg.vietnamplus.vn/uploaded/ngtmbh/2019_12_19/battongnucuoicuabanvoicachlamtrangrangbangcacnguyenlieudongiantrangrangbangnuocgao021537172872880width600height450.jpg" ,
      name:"Caesar Selections",
      ingredients:"Lorem, deren, trataro, filede, nerada",
      price:"$8.9"
    }
  ],
  MenuItem7:[
    {
      src:"https://cdnimg.vietnamplus.vn/uploaded/ngtmbh/2019_12_19/battongnucuoicuabanvoicachlamtrangrangbangcacnguyenlieudongiantrangrangbangnuocgao021537172872880width600height450.jpg" ,
      name:"Tuscan Grilled",
      ingredients:"Grilled chicken with provolone, artichoke hearts, and roasted red pesto",
      price:"$9.9"
    }
  ],
  MenuItem8:[
    {
      src:"https://cdnimg.vietnamplus.vn/uploaded/ngtmbh/2019_12_19/battongnucuoicuabanvoicachlamtrangrangbangcacnguyenlieudongiantrangrangbangnuocgao021537172872880width600height450.jpg" ,
      name:"Mozzarella Stick",
      ingredients:"Lorem, deren, trataro, filede, nerada",
      price:"$4.9"
    }
  ],
  MenuItem9:[
    {
      src:"https://cdnimg.vietnamplus.vn/uploaded/ngtmbh/2019_12_19/battongnucuoicuabanvoicachlamtrangrangbangcacnguyenlieudongiantrangrangbangnuocgao021537172872880width600height450.jpg" ,
      name:"Greek Salad",
      ingredients:"Fresh spinach, crisp romaine, tomatoes, and Greek olives",
      price:"$9.9"
    }
  ],
}