import Image from "next/image";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import DOMPurify from "dompurify";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import { AllArticleTypes } from "../../../API/data-types";
import { DetailArticle } from "../../../API/Home";
import SideInformasi from "../../../component/basic/sideInformasi";
import Styles from "../../../styles/DetailArticle.module.css";
import Gambar from "../../../public/Ilustrasi/loading.jpg";
import Footer from "../../../component/group/Footer";
import Navbars from "../../../component/group/Navbar";

export default function Artikels() {
  const { query, isReady } = useRouter();
  const [article, setArticle] = useState([]);

  const DetailArtikels = useCallback(async (id: any) => {
    const data = await DetailArticle(id);
    setArticle(data);
  }, []);

  useEffect(() => {
    if (isReady) {
      DetailArtikels(query.slug);
    } else {
      console.log("id tidak ditemukan");
    }
  }, [isReady]);

  console.log("art", article);

  const waiting = (
    <div style={{ textAlign: "center" }}>
      <Image src={Gambar} width={600} height={600} alt="Loading" />
      <h4>Tunggu</h4>
      <p>Sedang Mencari Artikel</p>
    </div>
  );

  const API_IMG = process.env.NEXT_PUBLIC_IMG;
  const myloader = ({ src }: { src: string }) => `${API_IMG}/${src}`;

  return (
    <>
      <section className="mb-5" style={{ backgroundColor: "#0C0717" }}>
        <Navbars />
      </section>
      <section className={`container ${Styles.Breadcrumb}`}>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/">
                <a className="text-decoration-none">Beranda</a>
              </Link>
            </li>
            <li className="breadcrumb-item " aria-current="page">
              <Link href="/informasi">
                <a className="text-decoration-none">informasi</a>
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              artikel
            </li>
          </ol>
        </nav>
      </section>
      <Container>
        <Row>
          <Col className={Styles.ContainerContent}>
            {article.length === 0
              ? waiting
              : article.map((item: AllArticleTypes) => (
                  <>
                    <div className={Styles.Img}>
                      <Image
                        loader={myloader}
                        src={item.file}
                        width={700}
                        height={300}
                        objectFit="cover"
                        alt={query.slug}
                      />
                    </div>

                    <div
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(item.texts),
                      }}
                    />
                  </>
                ))}
          </Col>
          <Col lg="4">
            <SideInformasi />
          </Col>
        </Row>
      </Container>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
