// Diplomas.js
import { Outlet, NavLink } from "react-router-dom";
import { useMemo, useState } from "react";
import { getDiplomas } from "./api";

export default function Diplomas() {
  const [query, setQuery] = useState("");
  const diplomas = getDiplomas();

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return diplomas;
    return diplomas.filter((d) =>
      (d.name + " " + (d.description || "")).toLowerCase().includes(q)
    );
  }, [query, diplomas]);

  return (
    <div className="container">
      <h1>Diplomas (School of Infocomm)</h1>

      <input
        className="search"
        placeholder="Search diplomas..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <ul className="categories">
        {filtered.map((d) => (
          <li key={d.id}>
            <NavLink
              className={({ isActive }) => (isActive ? "category-active" : null)}
              to={d.id}
            >
              {d.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <Outlet />
    </div>
  );
}
