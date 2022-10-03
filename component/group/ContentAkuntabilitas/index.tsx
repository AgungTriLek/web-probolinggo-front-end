import React, { useEffect, useState } from "react";
import Image from "next/image";
import ReactPaginate from "react-paginate";
import { Col, Row } from "react-bootstrap";
import Link from "next/link";
import { AllKecamatan } from "../../../API/data-types";
import Gambar1 from "../../../public/Ilustrasi/ilus_recrut.jpg";
import Styles from "../../../styles/ContentInformasi.module.css";

interface dataContent {
  data: any;
  title: string;
}
export default function ContentInformasi(props: dataContent) {
  const { data, title } = props;

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
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
      <div className={Styles.TitleSlug}>
        <h2>{title}</h2>
      </div>
      <div>
        {currentItems.map((item: AllKecamatan) => (
          <Row className={Styles.Container}>
            <Col md="3" lg="3" className={Styles.Img}>
              <Image src={Gambar1} alt="gambar" />
            </Col>
            <Col>
              <Row>
                <Col className={Styles.Title} lg="12">
                  <h5>{item.title}</h5>
                </Col>
                <Col className={Styles.Date} lg="6" sm="6" xs="6">
                  <span>{date(item.updatedAt).toDateString()}</span>
                </Col>
                <Col className={Styles.Link} lg="6" sm="6" xs="6">
                  <Link href={`/akuntabilitas/detail/${item._id}`}>
                    <a>Baca Selengkapnya</a>
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        ))}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
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
