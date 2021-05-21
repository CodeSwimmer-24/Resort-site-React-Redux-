import React, { useState } from "react";
import Title from "../Title/Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
function Services() {
  const [services, setServices] = useState([
    {
      icon: <FaCocktail />,
      title: "free cocktails",
      info:
        "Located right on Noosaâ€™s Laguna Bay, the beachfront accommodation to stay at. Book now! Great Location. Beachfront Views.",
    },
    {
      icon: <FaHiking />,
      title: "Endless hicking",
      info:
        "Located right on Noosaâ€™s Laguna Bay, the beachfront accommodation to stay at. Book now! Great Location. Beachfront Views.",
    },
    {
      icon: <FaShuttleVan />,
      title: "Free Shuttle",
      info:
        "Located right on Noosaâ€™s Laguna Bay, the beachfront accommodation to stay at. Book now! Great Location. Beachfront Views.",
    },
    {
      icon: <FaBeer />,
      title: "Strong bear",
      info:
        "Located right on Noosaâ€™s Laguna Bay, the beachfront accommodation to stay at. Book now! Great Location. Beachfront Views.",
    },
  ]);
  return (
    <div className="services">
      <Title title="services" />
      <div className="services-center ">
        {services.map((item, index) => (
          <article Key={index} className="service ">
            <span>{item.icon}</span>
            <h6>{item.title}</h6>
            <p>{item.info}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Services;
