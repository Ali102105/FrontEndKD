import { useState } from "react";
import "./Search.css";

const sections = [
  { id: "home", title: "Home", keywords: "home business satisfaction" },
  { id: "offers", title: "About us / Offers", keywords: "about offers code design" },
  { id: "services", title: "Services", keywords: "services promotion agency construction education fashion" },
  { id: "contact", title: "Contact us", keywords: "contact email phone quote" },
];

function Search() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const results = sections.filter((section) =>
    section.keywords.includes(query.trim().toLowerCase())
  );

  return (
    <div className="site-search">
      <button className="search-toggle" type="button" aria-label="Zoeken openen of sluiten"
        aria-expanded={open} aria-controls="siteSearchPanel" onClick={() => setOpen(!open)}>
        <span className="search-symbol" aria-hidden="true"></span>
      </button>
      {open && (
        <div className="search-panel" id="siteSearchPanel">
          <label className="form-label" htmlFor="sectionSearch">Zoek een onderdeel</label>
          <input className="form-control" id="sectionSearch" type="search"
            placeholder="Bijvoorbeeld services" value={query}
            onChange={(event) => setQuery(event.target.value)} />
          <ul className="list-unstyled mt-3 mb-0">
            {results.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`} onClick={() => setOpen(false)}>{section.title}</a>
              </li>
            ))}
          </ul>
          {results.length === 0 && <p className="mt-3 mb-0" role="status">Geen onderdeel gevonden.</p>}
        </div>
      )}
    </div>
  );
}

export default Search;
