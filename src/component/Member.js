import React from "react";

const MemberItem = (props) => {
  return (
    <div >
      <div class="nhan-su-item">
        <img src={props.propsItem.src} alt="" />
      </div>
      <div class="nhan-su-item-text">
        <h3>{props.propsItem.Job}</h3>
      </div>
    </div>
  );
};
const Member = (props) => {
    const propsList = props.member;
    return (
        <div class="nhan-su-items">
        {propsList.map((item) => (
          <MemberItem propsItem={item} />
        ))}
        </div>
    );
  };

export default Member;
