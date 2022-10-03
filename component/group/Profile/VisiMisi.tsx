import React from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

import Styles from "../../../styles/VisiMisi.module.css";
import Gambar1 from "../../../public/icon/gear.png";

export default function VisiMisi() {
  return (
    <Container>
      <div className="text-center">
        <div className={`mb-3 ${Styles.Visi}`}>
          <h4>Visi</h4>
        </div>
        <p>
          Terwujudnya Kabupaten Probolinggo Yang Sejahtera, Berkeadilan,Mandiri,
          Berwawasan Lingkungan dan Berakhlak Mulia.
        </p>
      </div>
      <section className="text-center">
        <div className={`mt-5 ${Styles.Misi}`}>
          <h4 className="m-auto">Misi</h4>
        </div>
        <article className="text-center mt-5">
          <Row className="justify-content-center">
            <Col lg="4" className={`${Styles.Misi1}`}>
              <p className={`${Styles.pMisi2}`}>
                Mewujudkan Kesejahteraan Masyarakat Melalui Peningkatan Daya
                Saing
              </p>
            </Col>
            <Col lg="4" className={`${Styles.Misi2}`}>
              <p className={`${Styles.pMisi2}`}>
                Daerah, Pertumbuhan Ekonomi Berbasis Kerakyatan, dan
                Optimalisasi
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="4" className={`${Styles.Misi3}`}>
              <p className={`${Styles.pMisi2}`}>
                Pengelolaan Sumber Daya Yang Berkelanjutan
              </p>
            </Col>
            <Col lg="2" className={Styles.ImgMisi}>
              <Image src={Gambar1} alt="gear" />
            </Col>
            <Col lg="4" className={`${Styles.Misi4}`}>
              <p className={`${Styles.pMisi2}`}>
                Mewujudkan Masyarakat Yang Berakhlak Mulia Melalui Peningkatan
              </p>
            </Col>
          </Row>
          <Row className=" justify-content-center">
            <Col lg="4" className={` ${Styles.Misi5}`}>
              <p className={`${Styles.pMisi2}`}>
                Kualitas Pelaksanaan Otonomi Daerah Dalam Penyelenggaraan
              </p>
            </Col>
            <Col lg="4" className={`${Styles.Misi5}`}>
              <p className={`${Styles.pMisi2}`}>
                Kepemerintahan Yang Baik dan Bersih
              </p>
            </Col>
          </Row>
        </article>
      </section>
    </Container>
  );
}
