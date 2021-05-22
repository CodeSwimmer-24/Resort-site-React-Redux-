import { PermDeviceInformation } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import defaultroom from "../images/room-1.jpeg";
import PropTypes from "prop-types";
export default function Room({ room }) {
  const { name, slug, images, price } = room;
  return (
    <div className="room">
      <div className="img-container">
        <img src={images[0] || defaultroom} alt="Room Image" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          Features
        </Link>
        <p className="room-info">{name}</p>
      </div>
    </div>
  );
}

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    image: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }),
};
