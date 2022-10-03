import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SideInformasi from "../../component/basic/sideInformasi";
import Styles from "../../styles/Informasi.module.css";

import ContentInformasi from "../../component/group/ContentInformasi";
import { Informasi } from "../../API/Home";
import Navbar from "../../component/group/Navbar";
import Footer from "../../component/group/Footer";

export default function Informasis() {
  const { query, isReady } = useRouter();
  const [article, setArticle] = useState([]);

  const AllArticles = useCallback(async (categ: any) => {
    const data = await Informasi(categ);
    setArticle(data);
  }, []);

  useEffect(() => {
    if (isReady) {
      AllArticles(query.slug);
    } else {
      console.log("tidak tersedia");
    }
  }, [isReady]);

  return (
    <>
      <header className="mb-5" style={{ backgroundColor: "#0C0717" }}>
        <Navbar />
      </header>
      <section className={`container ${Styles.Breadcrumb}`}>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a className="text-decoration-none" href="/">
                Beranda
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {query.slug}
            </li>
          </ol>
        </nav>
      </section>
      <article>
        <Container>
          <Row>
            <Col>
              <ContentInformasi data={article} title={query.slug} />
            </Col>
            <Col className="d-none d-md-block" md="4" lg="4">
              {/* side informasi */}
              <SideInformasi />
              <SideInformasi />
              <SideInformasi />
            </Col>
          </Row>
        </Container>
      </article>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
