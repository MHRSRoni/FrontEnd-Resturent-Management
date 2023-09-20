import PropTypes from 'prop-types';
import Button from './Button'; // Import your Button component

function Pagination({ totalPages, currentPage, onPageChange }) {
  const handlePageClick = (page) => {
    onPageChange(page);
  };

  return (
    <div className="pagination">
      {Array.from({ length: totalPages }, (_, index) => (
        <Button
          key={index}
          text={String(index + 1)}
          onClick={() => handlePageClick(index + 1)}
          // Apply different styles to the current page button
          className={currentPage === index + 1 ? 'current-page' : ''}
        />
      ))}
    </div>
  );
}

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
