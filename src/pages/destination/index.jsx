import React from "react";

function Destination() {
  return (
    <div className="page">
      <nav>nav with destination active</nav>
      <h2>01 PICK YOUR DESTINATION</h2>
      <div className="content">
        <img src="" alt="destination-image" />
        <div className="content">
          <div>options selector</div>
          <div>Title</div>
          <div>Details</div>
          <hr />
          <div className="info">
            <div className="distance">
              <p>AVG. DISTANCE</p>
            </div>
            <div className="time">
              <p>EST. TRAVEL TIME</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
