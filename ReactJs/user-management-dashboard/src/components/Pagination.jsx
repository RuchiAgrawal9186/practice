import React from 'react'

const Pagination = ({ total, page, setPage, limit, setLimit }) => {
  const pages = Math.ceil(total / limit);
  return (
    <div>
      <select value={limit} onChange={(e) => setLimit(Number(e.target.value))}>
        <option>10</option>
        <option>25</option>
        <option>50</option>
        <option>100</option>
      </select>

      {[...Array(pages)].map((_, i) => (
        <button key={i} onClick={() => setPage(i + 1)}>
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination
