import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktail",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, magnam?",
      },
      {
        icon: <FaHiking />,
        title: "free Hiking",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, magnam?",
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttle van",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, magnam?",
      },
      {
        icon: <FaBeer />,
        title: "free berar",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, magnam?",
      },
    ],
  };

  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
