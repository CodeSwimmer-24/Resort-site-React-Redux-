import React from "react";
import Banner from "../Components/Banner/Banner";
import Hero from "../Components/Hero/Hero";
import { Link } from "react-router-dom";
import Services from "../Components/Servicess/Services";
import FeaturedRooms from "../Components/FeaturedRooms";
function Home() {
  return (
    <>
      <Hero>
        <Banner title="luxurious rooms" subtitle="delux room starting at $299">
          <Link to="/rooms" className="btn-primary">
            Our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
}

export default Home;
