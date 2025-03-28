import { useState } from "react";
import { InputBase, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "6px 12px",
        width: "250px",
        backgroundColor: "#fff",
      }}
    >
      <InputBase
        placeholder="Search Images"
        value={query}
        onChange={handleChange}
        sx={{
          flexGrow: 1,
          fontSize: "14px",
        }}
      />
      <SearchIcon sx={{ color: "#666" }} />
    </Box>
  );
};

export default SearchBar;
