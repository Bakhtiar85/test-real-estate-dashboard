// src\components\ControlsBar.tsx
import { ControlsBarProps } from "../types-interfaces/interfaces";
import { SortDir } from "../types-interfaces/types";

function ControlsBar({ search, setSearch, minBeds, setMinBeds, sortDir, setSortDir }: ControlsBarProps) {
    return (
        <div className="controls-bar">
            <input
                type="text"
                placeholder="Search properties..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                    flex: "1",
                    minWidth: "220px",
                    padding: "8px",
                    fontSize: "1rem",
                    borderRadius: "4px",
                    border: "1px solid #ccc"
                }}
            />

            <select
                value={minBeds}
                onChange={(e) => setMinBeds(Number(e.target.value))}
                style={{
                    padding: "8px",
                    fontSize: "1rem",
                    borderRadius: "4px",
                    border: "1px solid #ccc"
                }}
            >
                <option value={0}>All Bedrooms</option>
                <option value={1}>1+ BR</option>
                <option value={2}>2+ BR</option>
                <option value={3}>3+ BR</option>
                <option value={4}>4+ BR</option>
                <option value={5}>5+ BR</option>
            </select>

            <select
                value={sortDir}
                onChange={(e) => setSortDir(e.target.value as SortDir)}
                style={{
                    padding: "8px",
                    fontSize: "1rem",
                    borderRadius: "4px",
                    border: "1px solid #ccc"
                }}
            >
                <option value="asc">Price: Low to High</option>
                <option value="desc">Price: High to Low</option>
            </select>
        </div>
    );
}

export default ControlsBar;
