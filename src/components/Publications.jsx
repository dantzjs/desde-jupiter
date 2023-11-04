import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import Publication from '@components/Publication';

const Items = ({ currentItems }) => {
  return (
    <div className="h-64 lg:h-72">
      {currentItems &&
        currentItems.map((item) => (
          <Publication url={`/${item.collection}/${item.slug}`} title={item.data.title} />
        ))}
    </div>
  );
}

export default function Publications({ items, itemsPerPage }) {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;

  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;

    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="Siguiente"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="Anterior"
        renderOnZeroPageCount={null}
        className="pagination"
      />
    </>
  );
}