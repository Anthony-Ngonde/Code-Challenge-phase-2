

const SearchBar = ({ handleSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search your Recent Transactions"
      onChange={(e) => handleSearch(e.target.value)}
    />
  );
};

export default SearchBar;