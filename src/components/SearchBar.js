

const SearchBar = ({ handleSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search Transactions"
      onChange={(e) => handleSearch(e.target.value)}
    />
  );
};

export default SearchBar;