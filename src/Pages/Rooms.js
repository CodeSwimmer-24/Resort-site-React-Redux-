import React from "react";
import { Link } from "react-router-dom";
import Banner from "../Components/Banner/Banner";
import Hero from "../Components/Hero/Hero";
import RoomContainer from "../Components/RoomContainer";

function Room() {
  return (
    <>
      <Hero hero="roomsHero ">
        <Banner title="our rooms">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <RoomContainer />
    </>
  );
}

export default Room;
