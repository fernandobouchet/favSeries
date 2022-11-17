import ReactPaginate from "react-paginate";

const Paginator = ({ data, setPage }) => {
  const handlePageChange = (e) => {
    setPage(e.selected + 1);
  };

  return (
    <>
      <ReactPaginate
        value={1}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(e) => handlePageChange(e)}
        pageCount={data ? data.total_pages - 1 : 0}
        previousLabel="<"
        renderOnZeroPageCount={null}
        pageRangeDisplayed={1}
        marginPagesDisplayed={1}
      />
    </>
  );
};
export default Paginator;
