import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { AllArticleTypes } from "../../../API/data-types";
import CardContentKecamatan from "../../basic/CardContentKecamatan";
import Gambar from "../../../public/icon/folder.png";

interface dataArticle {
  data: any;
}
export default function PaginationContent(props: dataArticle) {
  const { data } = props;
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
    console.log("pagination", data);
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };
  function date(e: any) {
    return new Date(e);
  }
  return (
    <>
      {currentItems.map((item: AllArticleTypes) => (
        <CardContentKecamatan
          gambar={Gambar}
          title={item.title}
          detailLink={`/kecamatan/detail/${item._id}`}
          time={date(item.updatedAt).toLocaleDateString()}
        />
      ))}
      <ReactPaginate
        breakLabel="..."
        nextLabel="next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        pageCount={pageCount}
        previousLabel="prev"
        activeLinkClassName="active-pagination"
        containerClassName="container-pagination"
        nextLinkClassName="next-link-pagination"
        previousLinkClassName="prev-link-pagination"
        pageLinkClassName="page-pagination"
      />
    </>
  );
}
