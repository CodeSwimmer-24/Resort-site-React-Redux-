import React from "react";
import Banner from "../Components/Banner/Banner";
import { Link } from "react-router-dom";
import Hero from "../Components/Hero/Hero";
function Error() {
  return (
    <Hero>
      <Banner title="404" subtitle="page not found">
        <Link to="/" className="btn-primary">
          return
        </Link>
      </Banner>
    </Hero>
  );
}

export default Error;
