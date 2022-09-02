import React, { useState } from "react";

export default function Navbar() {
  const [messageCount, setMessageCount] = useState(
    kFormatter(randomIntFromInterval(0, 3000))
  );
  const [notificationCount, setNotificationCount] = useState(
    kFormatter(randomIntFromInterval(0, 3000))
  );

  function kFormatter(num) {
    return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
      : Math.sign(num) * Math.abs(num);
  }
  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
    <div className="nav-container">
      <i className="fa-sharp fa-solid fa-bars fa-2x mx-2 hamburger"></i>
      <img
        style={{ height: "90px" }}
        className="logo"
        src="https://www.najlepszawersja.com/wp-content/uploads/2021/10/datezone-logo.jpg"
      />

      <div className="d-flex">
        <i className="fa-solid fa-magnifying-glass fa-2x mx-2 pt-2"></i>

        <button type="button" className="icon-button mx-2">
          <i className="fa-regular fa-bell fa-2x "></i>
          <span className="icon-button__badge">{notificationCount}</span>
        </button>

        {messageCount !== 0 && (
          <button type="button" className="icon-button mx-2">
            <i className="fa-regular fa-comment fa-2x "></i>
            <span className="icon-button__badge">{messageCount}</span>
          </button>
        )}

        <div className="d-flex justify-content-center aligin-items-center pt-2">
          <i className="fa-regular fa-user fa-2x mx-2"></i>
          <div className="ring-container">
            <div className="ringring"></div>
            <div className="circle"></div>
          </div>
          <h6 className="pt-2">reeeer4x</h6>
        </div>
      </div>
    </div>
  );
}
