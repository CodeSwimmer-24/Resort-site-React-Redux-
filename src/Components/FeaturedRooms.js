import React, { Component } from "react";
import { RoomContext } from "../context";
import Room from "./Room";
import Loading from "./Loading";
import Title from "./Title/Title";
export default class extends Component {
  static contextType = RoomContext;
  render() {
    let { loading, featuredRooms: rooms } = this.context;

    rooms = rooms.map((room) => {
      return <Room key={room.id} room={room} />;
    });
    return (
      <div className="featured-rooms">
        <Title title="featured rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </div>
    );
  }
}
