const TodoFilter = ({ filter, handleFilterChange }) => {
  return (
    <div className="filter-area mb-5">
      <label htmlFor="Filter:"></label>
      <select id="filter" value={filter} onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  );
};

export default TodoFilter;
