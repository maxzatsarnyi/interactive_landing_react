import React from 'react';
import {PaginationList, PaginationItem } from './PaginationElements';


const Pagination = ({page, revPerPage, totalPosts, changePage }) => {
  const pageNumbers = [];
                      // 20/10 = 2 pages 
  const pages = totalPosts / revPerPage;
  for (let i = 1; i <= Math.ceil(pages); i++) {
    pageNumbers.push(i);
  }
  
// 2 pages > 
  return (
    <>
        <PaginationList>
          {pageNumbers.map(number => (
          <PaginationItem 
            key={number}
            isActive={page == number ? true : false}
            onClick={() => changePage(number)}
          >
          </PaginationItem>
        ))}
        </PaginationList>
    </>
  );
};

export default Pagination;
