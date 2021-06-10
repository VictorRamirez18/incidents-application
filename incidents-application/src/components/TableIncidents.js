import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toogleModalForm } from "../redux/actions/modal.action";
import { deleteIncident } from "../redux/actions/incidents.action";
import { DateTime } from "luxon";

function TableIncident() {
  const incidents = useSelector((state) => state.incidents.incidents);
  const loading = useSelector((state) => state.incidents.loading);
  const filters = useSelector((state) => state.filters);

  const incidentsOrdered = [];

  if (filters.order === "Olds") {
    Object.assign(incidentsOrdered, incidents);
    incidentsOrdered.sort((a, b) => {
      if (a.date > b.date) return 1;
      if (a.date < b.date) return -1;
      return 0;
    });
  }

  if (filters.order === "Recents") {
    Object.assign(incidentsOrdered, incidents);
    incidentsOrdered.sort((a, b) => {
      if (a.date < b.date) return 1;
      if (a.date > b.date) return -1;
      return 0;
    });
  }

  const incidentsArray =
    incidentsOrdered.length > 0 ? incidentsOrdered : incidents;

  return (
    <Fragment>
      {loading === 0 && <p>Loading</p>}
      {incidents.length > 0 && (
        <table className="w-full table-auto border-collapse border border-black text-center">
          <thead>
            <tr className="bg-gray-300">
              <th className="border border-black">Id</th>
              <th className="border border-black w-3/12">Description</th>
              <th className="border border-black">Reporter's name</th>
              <th className="border border-black w-4/12">Actions</th>
              <th className="border border-black">Date</th>
              <th className="border border-black">Status</th>
              <th className="border border-black"></th>
            </tr>
          </thead>
          <tbody>
            {incidentsArray.map((incident, index) => {
              if (filters.search !== "") {
                if (!incident.description.includes(filters.search))
                  return false;
              }
              if (filters.status !== "") {
                if (incident.status !== filters.status) return false;
              }
              return <RowIncident row={incident} key={index} />;
            })}
          </tbody>
        </table>
      )}
    </Fragment>
  );
}

function RowIncident({ row }) {
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(toogleModalForm(true, row.id));
  };

  const handleDelete = () => {
    let confirm = window.confirm("Dou you want to delete this incident?");
    if (confirm) dispatch(deleteIncident(row));
  };

  return (
    <tr className="hover:bg-gray-200">
      <td className="border border-black">{row.id}</td>
      <td className="border border-black w-4/12 md:w-auto">
        {row.description}
      </td>
      <td className="border border-black">{row.name}</td>
      <td className="border border-black">{row.actions}</td>
      <td className="border border-black w-4/12 md:w-auto">
        {DateTime.fromISO(row.date).toFormat("ff")}
      </td>
      <td className="border border-black">{row.status}</td>
      <td className="border border-black">
        <div className="flex justify-around">
          <button
            className="bg-blue-400 rounded-md p-1 hover:bg-blue-300"
            onClick={handleEdit}
          >
            Edit
          </button>
          <button
            className="bg-red-400 rounded-md p-1 hover:bg-red-300"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}

export default TableIncident;
