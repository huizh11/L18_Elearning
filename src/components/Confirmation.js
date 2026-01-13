// Confirmation.js
import { useLocation, Link } from "react-router-dom";

export default function Confirmation() {
  const { state } = useLocation();

  return (
    <div className="container">
      <h1>Thank You!</h1>

      {state && (
        <>
          <p>{state.name}, your interest has been recorded.</p>
          <p>We’ll contact you at <strong>{state.email}</strong>.</p>

          <div className="panel">
            <p><strong>Diploma:</strong> {state.diploma}</p>
            <p><strong>Module:</strong> {state.module}</p>
          </div>
        </>
      )}

      <Link className="primary-link" to="/diplomas">Back to diplomas</Link>
    </div>
  );
}
