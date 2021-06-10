import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postIncident, clearCode } from "../redux/actions/incidents.action";

const initialState = {
  description: "",
  name: "",
  actions: "",
  date: new Date(),
};

function FormNewIncident() {
  const dispatch = useDispatch();
  const [newIncident, setNewIncident] = useState(initialState);
  const code = useSelector((state) => state.incidents.code);

  const handleCreate = async (event) => {
    event.preventDefault();
    await dispatch(postIncident(newIncident));
    setNewIncident(initialState);
  };

  useEffect(() => {
    if (code === 201) {
      alert("Incident created successfully");
      dispatch(clearCode());
    }
  }, [code, dispatch]);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setNewIncident({ ...newIncident, [name]: value });
  };

  return (
    <form className="border border-black w-full sm:w-8/12 lg:w-4/12 mx-auto my-4 p-4 gap-2 flex flex-col">
      <h2>New Incident</h2>

      <label htmlFor="">Description</label>
      <textarea
        cols="30"
        rows="5"
        className="border border-black"
        name="description"
        onChange={handleChange}
        value={newIncident.description}
      ></textarea>

      <label htmlFor="">Reporter's name</label>
      <input
        type="text"
        className="border border-black"
        onChange={handleChange}
        name="name"
        value={newIncident.name}
      />

      <label htmlFor="">Actions</label>
      <textarea
        cols="30"
        rows="7"
        className="border border-black"
        name="actions"
        onChange={handleChange}
        value={newIncident.actions}
      ></textarea>

      <button
        className="bg-blue-300 rounded-md p-2 w-6/12 mx-auto"
        onClick={handleCreate}
      >
        Report Incident
      </button>
    </form>
  );
}

export default FormNewIncident;
