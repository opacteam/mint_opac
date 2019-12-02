import React from "react";
import "./index.css";
import { Carousel } from "antd";

class HomeCarousel extends React.Component {
  render() {
    return (
      <Carousel>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
      </Carousel>
    );
  }
}

export default HomeCarousel;
