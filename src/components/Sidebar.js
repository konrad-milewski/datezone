import React from "react";

export default function Sidebar() {
  return (
    <div className="sidebar ">
      {" "}
      <a href="https://datezone.com/rankings" className="my-3 d-block fs-6">
        <i className="fa-solid  fa-ranking-star"></i> Rankings
      </a>{" "}
      <a
        href="https://datezone.com/notifications_friends"
        className="my-3 d-block fs-6"
      >
        <i className="fa-solid  fa-user-group"></i> Activity
      </a>{" "}
      <a href="https://datezone.com/images" className="my-3 d-block fs-6">
        <i className="fa-solid  fa-camera"></i> Photos
      </a>
    </div>
  );
}
