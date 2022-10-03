import React from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

import Mansion from "../../../public/icon/mansion.png";
import Map from "../../../public/icon/map.png";
import Home from "../../../public/icon/homeUser.png";
import Compas from "../../../public/icon/compas.png";

import Styles from "../../../styles/Wilayah.module.css";

export default function Wilayah() {
  return (
    <Container className="container">
      <div className={`${Styles.Wilayah} mb-5`}>
        <h4>Data Wilayah</h4>
      </div>
      <Row className={Styles.Rowcontent}>
        <Col className={` m-2 ${Styles.CardWilayah}`}>
          <div className={` ${Styles.ImgWilayah}`}>
            <Image src={Mansion} height={64} width={64} alt="gambar" />
          </div>
          <div className={`${Styles.ContentWilayah}`}>
            <p>
              Nama Resmi :<strong>Kabupaten Probolinggo</strong>
            </p>
            <p>
              Ibu Kota :<strong>Kraksaan</strong>
            </p>
            <p>
              Provinsi :<strong>Jawa Timur</strong>
            </p>
          </div>
        </Col>
        <Col className={` m-2 ${Styles.CardWilayah}`}>
          <div className={` ${Styles.ImgWilayah}`}>
            <Image src={Compas} height={64} width={64} alt="gambar" />
          </div>
          <div className={`${Styles.ContentWilayah}`}>
            <p>
              Utara :<strong>Selat Madura</strong>
            </p>
            <p>
              Timur :<strong>Kabupaten Situbondo dan Kabupaten Jember</strong>
            </p>
            <p>
              Barat :<strong>Kabupaten Pasuruan</strong>
            </p>
            <p>
              Selatan :<strong>Kabupaten Lumajang dan Kabupaten Malang</strong>
            </p>
          </div>
        </Col>
        <Col className={` m-2 ${Styles.CardWilayah}`}>
          <div className={` ${Styles.ImgWilayah}`}>
            <Image src={Map} height={64} width={64} alt="gambar" />
          </div>
          <div className={`${Styles.ContentWilayah}`}>
            <p>
              Luas Wilayah :<strong>20030m2</strong>
            </p>
            <p>
              Jumlah Penduduk :<strong>7000</strong>
            </p>
          </div>
        </Col>
        <Col className={` m-2 ${Styles.CardWilayah}`}>
          <div className={` ${Styles.ImgWilayah}`}>
            <Image src={Home} height={64} width={64} alt="gambar" />
          </div>
          <div className={`${Styles.ContentWilayah}`}>
            <p>Wilayah Administrasi</p>
            <p>
              Kecamatan :<strong>24</strong>{" "}
            </p>
            <p>
              Desa :<strong>325</strong>{" "}
            </p>
            <p>
              Kelurahan :<strong>5</strong>{" "}
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
