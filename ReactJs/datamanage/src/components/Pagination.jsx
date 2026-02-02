import React from 'react'

const Pagination = ({ page, total, pageSize, onPageChange }) => {
  const totalPages = Math.ceil(total / pageSize);
  return (
    <div className="flex items-center justify-between  mt-2">
      <span className="text-sm text-gray-600">
        Page {page} of {totalPages}
      </span>

      <div className="flex gap-2">
        <button
          onClick={() => onPageChange(page - 1)}
          disabled={page === 1}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Prev
        </button>

        <button
          onClick={() => onPageChange(page + 1)}
          disabled={page === totalPages}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination
