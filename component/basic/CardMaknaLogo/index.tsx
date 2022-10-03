import React from "react";
import { Col, Row } from "react-bootstrap";
import Image, { StaticImageData } from "next/image";
import Styles from "../../../styles/CardMaknaLogo.module.css";

interface ContentCard {
  Gambar: StaticImageData;
  Content: string;
  width?: number;
  height?: number;
  Content1?: string;
  Content2?: string;
}
export default function CardMaknaLogo(Props: ContentCard) {
  const { Gambar, Content, Content1, Content2, width, height } = Props;
  return (
    <Row className={`${Styles.CardMaknaLogo}`}>
      <Col lg="2" className={`text-center ${Styles.GambarMaknaLogo}`}>
        <Image
          className={Styles.ImgContent}
          src={Gambar}
          width={width}
          height={height}
          alt="gunung"
        />
      </Col>
      <Col>
        <p className="mb-0">{Content}</p>
        <p className="mb-0">{Content1}</p>
        <p className="mb-0">{Content2}</p>
      </Col>
    </Row>
  );
}
