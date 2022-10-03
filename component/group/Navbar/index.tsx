import React from "react";
import Link from "next/link";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Image from "next/image";
import LogoKab from "../../../public/logo_Probolinggo_light.png";
// import MenuNav from "../../basic/navbar/MenuNav";

interface Actived {
  Profiles?: String;
  Berandas?: String;
  Kecamatan?: String;
  ODP?: String;
}

export default function Navbars(Props: Actived) {
  const { Profiles, Berandas, Kecamatan, ODP } = Props;
  return (
    <>
      <Navbar collapseOnSelect expand="lg" style={{ color: "#fff" }}>
        <Container>
          <Navbar.Brand href="/">
            <Image src={LogoKab} width={165} height={65} alt="probolinggo" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="bg-white"
          />
          <Navbar.Collapse
            className="justify-content-end "
            id="basic-navbar-nav"
          >
            <Nav>
              <Link href="/" passHref>
                <Nav.Link className={Berandas}>Beranda</Nav.Link>
              </Link>
              <Link href="/Profile" passHref>
                <Nav.Link className={Profiles}>Profile</Nav.Link>
              </Link>
              <NavDropdown title="Akutanbilitas" id="basic-nav-dropdown">
                <Link href="akuntabilitas/LKJP" passHref>
                  <NavDropdown.Item>LKJP</NavDropdown.Item>
                </Link>
                <Link href="akuntabilitas/LKJIP" passHref>
                  <NavDropdown.Item>LKJIP</NavDropdown.Item>
                </Link>
                <Link href="akuntabilitas/RKPD" passHref>
                  <NavDropdown.Item>RKPD</NavDropdown.Item>
                </Link>
                <Link href="akuntabilitas/APDB" passHref>
                  <NavDropdown.Item>APDB</NavDropdown.Item>
                </Link>
                <Link href="akuntabilitas/SAKIP" passHref>
                  <NavDropdown.Item>SAKIP</NavDropdown.Item>
                </Link>
                <Link href="akuntabilitas/RPJMD" passHref>
                  <NavDropdown.Item>RPJMD</NavDropdown.Item>
                </Link>
              </NavDropdown>
              <Link href="/kecamatan" passHref>
                <Nav.Link className={`${Kecamatan}`}>
                  Kinerja Kecamatan
                </Nav.Link>
              </Link>
              <Link href="/Profile" passHref>
                <Nav.Link className={ODP}>Kinerja ODP</Nav.Link>
              </Link>
              <NavDropdown title="Informasi" id="basic-nav-dropdown">
                <Link href="informasi/Pemerintahan" passHref>
                  <NavDropdown.Item>Pemerintahan</NavDropdown.Item>
                </Link>
                <Link href="informasi/Pendidikan" passHref>
                  <NavDropdown.Item>Pendidikan</NavDropdown.Item>
                </Link>
                <Link href="informasi/Kesehatan" passHref>
                  <NavDropdown.Item>Kesehatan</NavDropdown.Item>
                </Link>
                <Link href="informasi/Kemasyarakatan" passHref>
                  <NavDropdown.Item>Kemasyarakatan</NavDropdown.Item>
                </Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <nav className="navbar navbar-expand-lg navbar-light container">
      <Link href="/">
        <a className="navbar-brand">
          <Image src={LogoKab} alt="probolinggo" width={165} height={65} />
        </a>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav m-auto">
          <li className={`nav-item ${Berandas}`}>
            <MenuNav title="Beranda" linkPage="/" />
          </li>
          <li className={`nav-item ${Profiles}`}>
            <MenuNav title="Profile" linkPage="/Profile" />
          </li>
          <li className="nav-item dropdown">
            <a
              className={`nav-link dropdown-toggle  ${Styles.textsAnchor}`}
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              Akuntabilitas
            </a>
            <div className="dropdown-menu">
              <Link href="/blog">
                <a className="dropdown-item">Action</a>
              </Link>
              <Link href="/blog">
                <a className="dropdown-item">Action</a>
              </Link>
              <Link href="/blog">
                <a className="dropdown-item">Action</a>
              </Link>
              <Link href="/blog">
                <a className="dropdown-item">Action</a>
              </Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className={`nav-link dropdown-toggle  ${Styles.textsAnchor}`}
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              Kinerja Kecamatan
            </a>
            <div className="dropdown-menu">
              <div className="d-flex flex-row">
                <Link href="/blog">
                  <a className="dropdown-item">Action</a>
                </Link>
                <Link href="/blog">
                  <a className="dropdown-item">Action</a>
                </Link>
                <Link href="/blog">
                  <a className="dropdown-item">Action</a>
                </Link>
                <Link href="/blog">
                  <a className="dropdown-item">Action</a>
                </Link>
              </div>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className={`nav-link dropdown-toggle  ${Styles.textsAnchor}`}
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              Kinerja ODP
            </a>
            <div className="dropdown-menu">
              <div className="d-flex flex-row">
                <Link href="/blog">
                  <a className="dropdown-item">Action</a>
                </Link>
                <Link href="/blog">
                  <a className="dropdown-item">Action</a>
                </Link>
                <Link href="/blog">
                  <a className="dropdown-item">Action</a>
                </Link>
                <Link href="/blog">
                  <a className="dropdown-item">Action</a>
                </Link>
              </div>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className={`nav-link dropdown-toggle  ${Styles.textsAnchor}`}
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              Informasi
            </a>
            <div className="dropdown-menu">
              <Link href="/blog">
                <a className="dropdown-item">Action</a>
              </Link>
              <Link href="/#">
                <a className="dropdown-item">Something else here</a>
              </Link>
              <Link href="/#">
                <a className="dropdown-item">Something else here</a>
              </Link>
            </div>
          </li>
          <li className={`nav-item `}>
            <MenuNav title="E-LKH" linkPage="/" />
          </li>
          <li className={`nav-item `}>
            <MenuNav title="PRIM" linkPage="/" />
          </li>
        </ul>
      </div>
    </nav> */}
    </>
  );
}
