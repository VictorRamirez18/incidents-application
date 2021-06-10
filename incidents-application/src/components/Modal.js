import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toogleModalForm } from "../redux/actions/modal.action";
import { putIncident } from "../redux/actions/incidents.action";

function Modal() {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal.isOpen);
  const id = useSelector((state) => state.modal.id);
  const incidents = useSelector((state) => state.incidents.incidents);
  const incident = incidents.filter((incident) => incident.id === id);

  const [actions, setActions] = useState("");
  const [status, setStatus] = useState("");
  const [reason, setReason] = useState("");
  const [editingStatus, setEditingStatus] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (modal) setActions(incident[0].actions);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modal]);

  useEffect(() => {
    if (modal) setStatus(incident[0].status);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modal]);

  const handleCloseModal = (event) => {
    event.preventDefault();
    dispatch(toogleModalForm(false, 0));
  };

  const handleAccept = async (event) => {
    event.preventDefault();
    incident[0].actions = actions;
    if (editingStatus) {
      if (reason !== "") {
        incident[0].status = status;
        incident[0].reason = reason;
        setMessage("");
        setReason("");
      } else {
        setMessage("Campo obligatorio");
        return false;
      }
    }
    dispatch(putIncident(incident[0]));
    dispatch(toogleModalForm(false, 0));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "actions") setActions(value);
    if (name === "status") setStatus(value);
    if (name === "reason") setReason(value);
  };

  return (
    <div
      id="modal"
      className={`fixed top-0 left-0 w-screen h-screen flex items-center py-4 justify-center bg-gray-500 bg-opacity-50 transform scale-${
        modal ? 100 : 0
      } transition-transform duration-300`}
    >
      <form
        className="bg-white w-1/2 h-full p-12 flex flex-col justify-around items-center gap-2"
        id="modal-content"
      >
        {/* <FaSignOutAlt className="text-4xl animate-pulse" /> */}
        <h2 className="text-2xl font-medium">Editing Incident</h2>
        <label htmlFor="">Actions</label>
        <textarea
          name="actions"
          cols="30"
          rows="7"
          className="border border-black w-full"
          value={actions}
          onChange={handleChange}
        ></textarea>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            onChange={() => setEditingStatus(!editingStatus)}
          />
          <label htmlFor="">Edit Status?</label>
        </div>

        <select
          name="status"
          className={`border border-black ${editingStatus ? "" : "hidden"}`}
          onChange={handleChange}
        >
          <option value="Open">Open</option>
          <option value="Closed">Closed</option>
        </select>

        <label htmlFor="" className={editingStatus ? "" : "hidden"}>
          Reason
        </label>
        <textarea
          name="reason"
          cols="30"
          rows="5"
          className={`border w-full border-black ${
            editingStatus ? "" : "hidden"
          }`}
          value={reason}
          onChange={handleChange}
          required
        ></textarea>
        <span className={`text-red-500 ${editingStatus ? "" : "hidden"}`}>
          {message}
        </span>

        <div className="flex p-2 gap-2 justify-around  w-full my-4">
          <button
            className="bg-red-400 text-white rounded-md p-1 w-4/12"
            onClick={handleAccept}
          >
            Accept
          </button>
          <button
            className="bg-blue-400 text-white rounded-md p-1 w-4/12"
            onClick={handleCloseModal}
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
}

export default Modal;
