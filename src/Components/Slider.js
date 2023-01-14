import React from "react";

function Slider() {
  return (
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            className="img-slider"
            src="https://api.pizzahut.io/v1/content/en-in/in-1/images/deal/1-plus-1-personal-pepsi-san-francisco-style.d3695bf5eb226d085a2e45a334bc5d56.1.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://api.pizzahut.io/v1/content/en-in/in-1/images/deal/1-plus-1-personal-pepsi-san-francisco-style.d3695bf5eb226d085a2e45a334bc5d56.1.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://api.pizzahut.io/v1/content/en-in/in-1/images/deal/1-plus-1-personal-pepsi-san-francisco-style.d3695bf5eb226d085a2e45a334bc5d56.1.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Slider;
