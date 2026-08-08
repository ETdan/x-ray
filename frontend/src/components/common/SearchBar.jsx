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
      <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none text-neutral-500 group-focus-within:text-primary transition-colors">
        <FiSearch size={iconSize} />
      </div>
      <input
        type="text"
        className={`block w-full pl-14 pr-6 py-3 rounded-neu-lg bg-surface placeholder:text-neutral-400 shadow-neu-inset transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 text-ink ${heightClass} ${textSize}`}
        placeholder="Search companies, salaries, insights..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className="hidden">Search</button>
    </form>
  );
}
