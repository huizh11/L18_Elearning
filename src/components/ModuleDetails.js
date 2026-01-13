// ModuleDetails.js
import { useParams, Link } from "react-router-dom";
import { getModule, getDiploma } from "./api";

export default function ModuleDetails() {
  const { diplomaId, moduleId } = useParams();
  const diploma = getDiploma(diplomaId);
  const module = getModule({ diplomaId, moduleId });

  if (!module || !diploma) return <p>Module not found.</p>;

  return (
    <div className="module-card">
      <h3>{module.name}</h3>
      <p className="muted">{module.code}</p>
      <p>{module.desc}</p>

      <ul className="module-meta">
        <li><strong>Credits:</strong> {module.credits}</li>
        <li><strong>Assessment:</strong> {module.assessment}</li>
        <li><strong>Diploma:</strong> {diploma.name}</li>
      </ul>
    </div>
  );
}
