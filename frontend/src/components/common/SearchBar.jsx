import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function SearchBar({ className = "", size = "md" }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/companies?search=${encodeURIComponent(query)}`);
    }
  };

  const heightClass = size === "lg" ? "h-16" : "h-12";
  const iconSize = size === "lg" ? 24 : 20;
  const textSize = size === "lg" ? "text-xl" : "text-base";

  return (
    <form onSubmit={handleSearch} className={`relative w-full group ${className}`}>
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-ink">
        <FiSearch size={iconSize} strokeWidth={3} />
      </div>
      <input
        type="text"
        className={`block w-full pl-12 pr-4 py-3 border-2 border-ink rounded-none bg-white placeholder-ink/50 shadow-brutal transition-all focus:outline-none focus:shadow-brutal-hover focus:-translate-y-1 font-bold ${heightClass} ${textSize}`}
        placeholder="Search companies, salaries..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className="hidden">Search</button>
    </form>
  );
}
