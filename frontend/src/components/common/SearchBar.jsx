import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function SearchBar({ className = "", size = "md" }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      // In a real app, this might route to a global search page or open a modal
      navigate(`/companies?search=${encodeURIComponent(query)}`);
    }
  };

  const heightClass = size === "lg" ? "h-14" : "h-10";
  const iconSize = size === "lg" ? 24 : 18;
  const textSize = size === "lg" ? "text-lg" : "text-sm";

  return (
    <form onSubmit={handleSearch} className={`relative w-full ${className}`}>
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-500">
        <FiSearch size={iconSize} />
      </div>
      <input
        type="text"
        className={`block w-full pl-10 pr-3 py-2 border border-neutral-200 rounded-md leading-5 bg-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition duration-150 ease-in-out sm:leading-5 ${heightClass} ${textSize}`}
        placeholder="Search companies, jobs, salaries..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className="hidden">Search</button>
    </form>
  );
}
