import React from "react";
import RoomFilter from "./RoomFilter";
import { withRoomConsumer } from "../context";
import Loading from "./Loading";
import Room from "./Room";

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>No rooms found in this parameters</h3>
      </div>
    );
  }
  return (
    <>
      <RoomFilter rooms={rooms} />
      <section className="roomslist">
        <div className="roomslist-center">
          {rooms.map((item) => {
            return <Room key={item.id} room={item} />;
          })}
        </div>
      </section>
    </>
  );
}

export default withRoomConsumer(RoomContainer);

// import React from "react";
// import RoomFilter from "./RoomFilter";
// import RoomList from "./RoomList";
// import { RoomConsumer } from "../context";
// import Loading from "./Loading";
// export default function RoomContainer() {
//   return (
//     <RoomConsumer>
//       {(value) => {
//         console.log(value);
//         const { loading, sortedRooms, rooms } = value;
//         if (loading) {
//           return <Loading />;
//         }
//         return (
//           <div>
//             <h1>Hello from room container</h1>
//             <RoomFilter rooms={rooms} />
//             <RoomList rooms={sortedRooms} />
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   );
// }
