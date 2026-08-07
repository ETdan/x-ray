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

  const heightClass = size === "lg" ? "h-14" : "h-11";
  const iconSize = size === "lg" ? 22 : 18;
  const textSize = size === "lg" ? "text-lg" : "text-sm";

  return (
    <form onSubmit={handleSearch} className={`relative w-full group ${className}`}>
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-400 group-focus-within:text-primary transition-colors">
        <FiSearch size={iconSize} />
      </div>
      <input
        type="text"
        className={`block w-full pl-12 pr-4 py-3 border border-ink/20 rounded-editorial-sm bg-white placeholder:text-neutral-400 shadow-sm transition-all focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary ${heightClass} ${textSize}`}
        placeholder="Search companies, salaries..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className="hidden">Search</button>
    </form>
  );
}
