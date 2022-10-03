import Head from "next/head";
import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../component/group/Footer";
import Navbar from "../component/group/Navbar";
import Geografis from "../component/group/Profile/Geografis";
import MaknaLogo from "../component/group/Profile/MaknaLogo";
import VisiMisi from "../component/group/Profile/VisiMisi";
import Wilayah from "../component/group/Profile/Wilayah";
import Styles from "../styles/Profile.module.css";

export default function profile() {
  return (
    <div>
      <Head>
        <title>Profile</title>
      </Head>
      <section className={`${Styles.Navbar}`}>
        <Navbar Profiles="actived" />
      </section>
      <Container className={Styles.Breadcrumb}>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a className="text-decoration-none" href="/">
                Beranda
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Profile
            </li>
          </ol>
        </nav>
      </Container>
      <section className={`${Styles.Iframe}`}>
        <Container>
          <div className="background-iframe">
            <iframe
              src="https://www.youtube.com/embed/nxGOfXS_qkM"
              height={600}
              width="100%"
              title="video"
            />
          </div>
        </Container>
      </section>
      <section className={`${Styles.visiMisi}`}>
        <VisiMisi />
      </section>
      <section className={`${Styles.Wilayah}`}>
        <Wilayah />
      </section>
      <section className={`${Styles.MaknaLogo}`}>
        <MaknaLogo />
      </section>
      <section className={`${Styles.Geo}`}>
        <Geografis />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}
