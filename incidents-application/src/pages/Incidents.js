import React, { useEffect } from "react";
import TableIncidents from "../components/TableIncidents";
import { useDispatch } from "react-redux";
import { getIncidents } from "../redux/actions/incidents.action";
import Modal from "../components/Modal";
import Navbar from "../components/Navbar";
import Filters from "../components/Filters";

function Incidents() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIncidents());
  }, [dispatch]);

  return (
    <div className="flex flex-col gap-2">
      <Navbar />
      <Filters />
      <div className="w-full overflow-x-scroll lg:overflow-auto min-h-screen">
        <TableIncidents />
      </div>
      <Modal />
    </div>
  );
}

export default Incidents;
