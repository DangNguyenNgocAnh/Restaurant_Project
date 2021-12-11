import Member from "../../component/Member";
import "C:/Demonstration/PolyReact2021/restaurant-project/src/asset/css/OurTeam.css";
import React, { Component } from "react";

class OurTeam extends Component {
  constructor(props) {
    super(props);
    this.state = blog;
  }
  render() {
    return (
      <section class="nhan-su">
        <div class="container">
          <div class="row">
            <div class="title">
              <h2>Our Team</h2>
            </div>
          </div>
          <div class="row">
            <Member member={this.state.Member1} />
            <Member member={this.state.Member2} />
            <Member member={this.state.Member3} />
          </div>
        </div>
      </section>
    );
  }
}
export default OurTeam;
const blog = {
  Member1: [
    {
      src: "https://i.pinimg.com/550x/2d/15/05/2d1505109c25491c7cc1800d64af4a47.jpg",
      Job: "Dang Nguyen Ngoc Anh",
    },
  ],
  Member2: [
    {
      src: "https://i.pinimg.com/originals/e7/a5/21/e7a521f8cbaf2b270cfbab798837e192.jpg",
      Job: "Pham Van Chien",
    },
  ],
  Member3: [
    {
      src: "https://pbs.twimg.com/media/DnmaxQfVsAE145P.jpg",
      Job: "Nguyen Xuan Hieu",
    },
  ],
};
