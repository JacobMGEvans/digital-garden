import React, { Component } from "react";
import { Media } from "reactstrap";

import menuData from "../assets/menuData";

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: [...menuData],
    };
  }

  render() {
    const { dishes } = this.state;

    return (
      <div className="container">
        <div className="row">
          <Media list>
            {dishes.map(dish => (
              <div key={dish.id} className="col-12 mt-5">
                <Media tag="li">
                  <Media left middle>
                    <Media object src={`dist/${dish.image}`} alt={dish.name} />
                  </Media>
                  <Media body className="ml-5">
                    <Media heading>{dish.name}</Media>
                    <p>{dish.description}</p>
                  </Media>
                </Media>
              </div>
            ))}
          </Media>
        </div>
      </div>
    );
  }
}
