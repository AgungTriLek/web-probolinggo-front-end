import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import LogoKab from "../../../public/logo_Probolinggo_light.png";
import IcFb from "../../../public/icon/facebook.svg";
import IcIg from "../../../public/icon/Ig.svg";
import IcTw from "../../../public/icon/twiter.svg";
import Styles from "../../../styles/Footer.module.css";

export default function Footer() {
  return (
    <div className={Styles.bgFooter}>
      <Container className="text-center">
        <Row className=" justify-content-between">
          <Col lg="2" md="6" sm="6" className="col-mobiles">
            <Row>
              <Link href="/">
                <a className="navbar-brand">
                  <Image
                    src={LogoKab}
                    alt="probolinggo"
                    width={165}
                    height={65}
                  />
                </a>
              </Link>
            </Row>
            <Row className="justify-content-center mb-3">
              <h6>Ikuti kami</h6>
            </Row>
            <Row className="row justify-content-around  mt-3 mb-3">
              <Col>
                <Link href="www.facebook.com">
                  <a>
                    <Image src={IcFb} />
                  </a>
                </Link>
              </Col>
              <Col>
                <Link href="www.instagram.com">
                  <a>
                    <Image src={IcIg} />
                  </a>
                </Link>
              </Col>
              <Col>
                <Link href="www.twiter.com">
                  <a>
                    <Image src={IcTw} />
                  </a>
                </Link>
              </Col>
            </Row>
            <Row className=" text-center mt-3 mb-3 justify-content-center">
              <p>copyright@2021</p>
            </Row>
          </Col>
          <Col md="6" className=" d-none d-md-block text-end nav-footer">
            <Row className="mt-5">
              <Col className="text-center">
                <h5>Profile</h5>
                <ul className={Styles.styleList}>
                  <li>Visi dan Misi</li>
                  <li>Geografis</li>
                  <li>Data Wilayah</li>
                  <li>Lambang</li>
                </ul>
              </Col>
              <Col className="text-center">
                <h5>Informasi</h5>
                <ul className={Styles.styleList}>
                  <li>Pemerintahan</li>
                  <li>Kesehatan</li>
                  <li>Pendidikan</li>
                  <li>Kemasyarakatan</li>
                </ul>
              </Col>
              <Col className="text-center">
                <h5>Kontak</h5>
                <ul className={Styles.styleList}>
                  <li>E-mail</li>
                  <li>Telepon</li>
                  <li>G-map</li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
