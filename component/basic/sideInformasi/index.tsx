import React from "react";
import Image from "next/image";
import { Col, Row } from "react-bootstrap";

import Styles from "../../../styles/SideInformasi.module.css";
import Gambar1 from "../../../public/Ilustrasi/ilus_Pengumuman.jpg";

export default function SideInformasi() {
  return (
    <Row className={Styles.Container}>
      <Col md="12" className={Styles.Img}>
        <Image src={Gambar1} width={100} height={100} alt="gambar" />
      </Col>
      <Col className={Styles.Text}>
        <h5>title</h5>
        <p>time</p>
      </Col>
    </Row>
  );
}
