// Diploma.js
import { useParams, NavLink, Outlet, Link } from "react-router-dom";
import { getDiploma } from "./api";
import { useFavourites } from "./FavouritesContext";

export default function Diploma() {
  const { diplomaId } = useParams();
  const diploma = getDiploma(diplomaId);
  const { isFavourite, toggleFavourite } = useFavourites();

  if (!diploma) return <p>Diploma not found.</p>;

  return (
    <>
      <div className="panel">
        <h2>{diploma.name}</h2>
        <p className="muted">{diploma.description}</p>
      </div>

      <ul className="session-list">
        {diploma.modules.map((m) => (
          <li className="session" key={m.id}>
            <NavLink
              className={({ isActive }) => (isActive ? "session-active" : null)}
              to={m.id}
            >
              <p className="session-name">
                {m.name} <span className="muted">({m.code})</span>
              </p>
              <p className="muted">{m.credits} credits • {m.assessment}</p>
            </NavLink>

            <button
              className="fav-btn"
              type="button"
              onClick={() => toggleFavourite({ diplomaId, moduleId: m.id })}
            >
              {isFavourite({ diplomaId, moduleId: m.id }) ? "★" : "☆"}
            </button>
          </li>
        ))}
      </ul>
      <Link className="primary-link" to="/register" state={{ preselectDiplomaId: diplomaId }}>
        Register interest for this course
      </Link>

      <Outlet />
    </>
  );
}
