"use client";

import { useState } from "react";
import Card from "@/components/Card";

const TileSearch = ({ tiles }) => {
  const [query, setQuery] = useState("");

  const filteredTiles = tiles.filter((tile) =>
    tile.title.toLowerCase().includes(query.toLowerCase().trim()),
  );

  return (
    <>
      <div className="join mb-6 flex justify-center md:justify-end">
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            required
            placeholder="Search tile by name..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
      </div>

      <div>
        {filteredTiles.length === 0 ? (
          <div className="flex flex-col items-center justify-center px-4 py-14 md:py-20 text-center">
            <div className="text-5xl md:text-6xl mb-3 md:mb-4">🔍</div>

            <h2 className="text-lg md:text-2xl font-semibold text-gray-800">
              No tiles found
            </h2>

            <p className="text-sm md:text-base text-gray-500 mt-2 max-w-xs md:max-w-md">
              We couldn’t find any tiles matching your search. Try different
              keywords or check spelling.
            </p>

            <div className="mt-5 md:mt-6 flex flex-col sm:flex-row gap-2 md:gap-3 w-full sm:w-auto">
              <button
                onClick={() => window.location.reload()}
                className="btnMe"
              >
                Clear search
              </button>
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-4 md:grid-cols-4 gap-6">
            {filteredTiles.map((tile) => (
              <Card key={tile.id} tile={tile} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default TileSearch;
