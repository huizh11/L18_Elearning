// Register.js
import { useNavigate, useLocation } from "react-router-dom";
import { useMemo, useRef, useState } from "react";
import { getDiplomas } from "./api";

export default function Register() {
  const navigate = useNavigate();
  const location = useLocation();

  const nameRef = useRef(null);
  const emailRef = useRef(null);

  const diplomas = getDiplomas();

  const preDiplomaId = location.state?.preselectDiplomaId || "";
  const preModuleId = location.state?.preselectModuleId || "";

  const [diplomaId, setDiplomaId] = useState(preDiplomaId);
  const [moduleId, setModuleId] = useState(preModuleId);

  function handleSubmit(event) {
    event.preventDefault();

    const chosenDiploma = diplomas.find((d) => d.id === diplomaId);
    const chosenModule = chosenDiploma?.modules.find((m) => m.id === moduleId);

    navigate("/confirmed", {
      state: {
        name: nameRef.current.value,
        email: emailRef.current.value,
        diploma: chosenDiploma?.name || "N/A",
        module: chosenModule ? `${chosenModule.name} (${chosenModule.code})` : "N/A",
      },
    });
  }

  return (
    <div className="container">
      <h1>Register Interest</h1>
      <p className="muted">Submit your interest and we’ll contact you with more details.</p>

      <form onSubmit={handleSubmit} className="form">
        <label>
          Name:
          <input type="text" name="name" ref={nameRef} required />
        </label>

        <label>
          Email:
          <input type="email" name="email" ref={emailRef} required />
        </label>

        <label>
          Diploma:
          <select value={diplomaId} onChange={(e) => {
            setDiplomaId(e.target.value);
            setModuleId("");
          }} required>
            <option value="">Select a diploma</option>
            {diplomas.map((d) => (
              <option key={d.id} value={d.id}>{d.name}</option>
            ))}
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
