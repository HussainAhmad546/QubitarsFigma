// import React from 'react';

// const Pagination = () => {
//   const pageNumbers = [...Array(10).keys()].map((pageNum) => pageNum + 1);

//   return (
//     <div className="pagination">
//       {pageNumbers.map((pageNum) => (
//         <span key={pageNum} className="page-number">
//           {pageNum}
//         </span>
//       ))}
//     </div>
//   );
// };

// export default Pagination;
import React from 'react';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';

const Pagination = () => {
  const pageNumbers = [...Array(10).keys()].map((pageNum) => pageNum + 1);

  return (
    <div className="pagination">
      <span className="page-arrow">
        <AiFillCaretLeft />
      </span>
      {pageNumbers.map((pageNum) => (
        <span key={pageNum} className="page-number">
          {pageNum}
        </span>
      ))}
      <span className="page-arrow">
        <AiFillCaretRight />
      </span>
    </div>
  );
};

export default Pagination;

