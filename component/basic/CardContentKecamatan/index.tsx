import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col, Row } from "react-bootstrap";
import Styles from "../../../styles/CardContentKecamatan.module.css";

interface CardKecamatan {
  gambar?: StaticImageData;
  time?: string;
  detailLink?: Url;
  title?: string;
}

export default function CardContentKecamatan(props: CardKecamatan) {
  const { gambar, time, detailLink, title } = props;
  return (
    <Row className={Styles.Container}>
      <Col xs="12" sm="12" md="3" lg="3" className={Styles.Img}>
        <Image src={gambar} width={100} height={100} alt="gambar" />
      </Col>
      <Col>
        <Row className={Styles.Content}>
          <Col lg="12" className={Styles.TitleContent}>
            <h5>{title}</h5>
          </Col>
          <Col xs="5" className={Styles.Time}>
            <small>{time}</small>
          </Col>
          <Col className={Styles.Anchor}>
            <Link href={detailLink}>
              <a>Baca Selengkapnya</a>
            </Link>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
