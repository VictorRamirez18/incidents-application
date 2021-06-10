import React, { useState } from "react";
import {
  filterSearch,
  filterDate,
  filterStatus,
} from "../redux/actions/filters.action";
import { useDispatch } from "react-redux";

function Filters() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "search") setSearch(value);
  };

  const handleSearch = () => {
    dispatch(filterSearch(search));
  };

  const handleFilterDate = (event) => {
    const { value } = event.target;
    dispatch(filterDate(value));
  };

  const handleFilterStatus = (event) => {
    const { value } = event.target;
    dispatch(filterStatus(value));
  };

  return (
    <div className="flex justify-around flex-col sm:flex-row items-center gap-2">
      <div className="flex gap-2">
        <input
          type="text"
          name="search"
          className="border border-black"
          value={search}
          onChange={handleChange}
        />
        <button
          className="bg-gray-200 bg-blue-200 rounded-md p-1 hover:bg-blue-400"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      <div className="flex gap-2">
        <label htmlFor="date">Date</label>
        <select
          name="date"
          id="date"
          className="border border-black"
          onChange={handleFilterDate}
        >
          <option value="">Any</option>
          <option value="Recents">Recents</option>
          <option value="Olds">Olds</option>
        </select>
      </div>

      <div className="flex gap-2">
        <label htmlFor="status">Status</label>
        <select
          name="status"
          id="status"
          className="border border-black"
          onChange={handleFilterStatus}
        >
          <option value="">Any</option>
          <option value="Open">Open</option>
          <option value="Closed">Closed</option>
        </select>
      </div>
    </div>
  );
}

export default Filters;
