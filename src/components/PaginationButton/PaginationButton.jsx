import React from "react";

const PaginationButtons = ({ handleShowLess, handleShowMore, handleReset, visibleCount, data }) => {
  return (
    <div className="pagination-buttons">
      {visibleCount > 5 && (
        <button onClick={handleShowLess} className="btn-pagination">
          Volver atrás
        </button>
      )}
      {data.length > visibleCount && (
        <button onClick={handleShowMore} className="btn-pagination">
          Ver más
        </button>
      )}
      {visibleCount > 5 && (
        <button onClick={handleReset} className="btn-pagination">
          Volver a las primeras
        </button>
      )}
    </div>
  );
};

export default PaginationButtons;
