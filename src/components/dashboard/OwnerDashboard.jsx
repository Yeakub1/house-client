/* eslint-disable react/prop-types */

import Bookings from "./houseOwner/Bookings";
import HouseList from "./houseOwner/HouseList";

const OwnerDashboard = ({ selectedMenu }) => {
  return (
    <>
      {selectedMenu ? (
        <>
          <Bookings />
        </>
      ) : (
        <>
          <HouseList />
        </>
      )}
    </>
  );
};

export default OwnerDashboard;
