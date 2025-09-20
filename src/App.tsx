// src/App.tsx
import { useEffect, useState } from "react";
import { properties } from "./data/properties";
import ControlsBar from "./components/ControlsBar";
import PropertyGrid from "./components/PropertyGrid";
import { Route, SortDir } from "./types-interfaces/types";
import { filterAndSortProperties } from "./utils/propertyUtils";
import { parseHash } from "./router";
import DetailsPage from "./pages/DetailsPage";

function App() {
  const [search, setSearch] = useState("");
  const [minBeds, setMinBeds] = useState(0);
  const [sortDir, setSortDir] = useState<SortDir>("asc");
  const [route, setRoute] = useState<Route>(parseHash());

  useEffect(() => {
    const onHashChange = () => setRoute(parseHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  if (route.page === "details") {
    return <DetailsPage slug={route.slug} />;
  }

  const filtered = filterAndSortProperties(properties, search, minBeds, sortDir);

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "16px" }}>
      <h1>Real Estate Dashboard</h1>
      <ControlsBar
        search={search}
        setSearch={setSearch}
        minBeds={minBeds}
        setMinBeds={setMinBeds}
        sortDir={sortDir}
        setSortDir={setSortDir}
      />
      <PropertyGrid items={filtered} />
    </div>
  );
}

export default App;