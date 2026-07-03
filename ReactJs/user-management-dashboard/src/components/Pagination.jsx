import React from 'react'
import "../styles/pagination.css"

const Pagination = ({ total, page, setPage, limit, setLimit }) => {
  const pages = Math.ceil(total / limit);
  return (
    <div className="pagination">
      <select value={limit} onChange={(e) => setLimit(Number(e.target.value))}>
        <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
      </select>

      {[...Array(pages)].map((_, i) => (
        <button
          key={i}
          className={page === i + 1 ? "active" : ""}
          onClick={() => setPage(i + 1)}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination
