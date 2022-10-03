import Image from "next/image";
import React, {
  Children,
  forwardRef,
  useCallback,
  useState,
  useEffect,
} from "react";
import { Col, Container, Dropdown, FormControl, Row } from "react-bootstrap";
import { Kecamatan } from "../API/Home";
import Search from "../public/Ilustrasi/Search Engine.svg";
import Styles from "../styles/Kecamatan.module.css";
import PaginationContent from "../component/group/Pagination";
import Navbars from "../component/group/Navbar";
import Footer from "../component/group/Footer";
import SideInformasi from "../component/basic/sideInformasi";
import { KecamatanLoader } from "../component/basic/loading";

interface Kecamatan {
  id: number;
  kecamatan: string;
}

const kecamatans: Kecamatan[] = [
  { id: 1, kecamatan: "Dringu" },
  { id: 2, kecamatan: "Kraksaan" },
  { id: 3, kecamatan: "Gendingan" },
  { id: 4, kecamatan: "Polu" },
];

type CustomToggleType = {
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {};
};

const CustomToggle = React.forwardRef(
  (props: CustomToggleType, ref: React.Ref<HTMLAnchorElement>) => (
    <a
      className={Styles.Anchor}
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        props.onClick(e);
        console.log(props.onClick(e));
      }}
    >
      {props.children}
      <span style={{ paddingLeft: "5px" }}>&#x25bc;</span>
    </a>
  )
);

type CustomMenuProps = {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  labeledBy?: string;
};

const CustomMenu = React.forwardRef(
  (props: CustomMenuProps, ref: React.Ref<HTMLDivElement>) => {
    const [value, setValue] = useState("");

    return (
      <div
        ref={ref}
        style={props.style}
        className={props.className}
        aria-labelledby={props.labeledBy}
      >
        <FormControl
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="Cari Kecamatan"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <ul className="list-unstyled">
          {React.Children.toArray(props.children).filter(
            (child: any) =>
              !value || child.props.children.toLowerCase().startsWith(value)
          )}
        </ul>
      </div>
    );
  }
);
export default function KecamatanPage() {
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedKecamatan, setSelectedKecamatan] = useState(0);

  const DataKecamatan = useCallback(async (cat: any) => {
    const data = await Kecamatan(cat);
    setArticle(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    function categoryKecamatan() {
      const pilihKecamatans: Kecamatan = kecamatans.find(
        (f) => f.id === selectedKecamatan
      );
      return pilihKecamatans ? pilihKecamatans.kecamatan : "Pilih Kecamatan";
    }

    if (categoryKecamatan()) {
      DataKecamatan(categoryKecamatan());
    } else {
      console.log("belum tersedia");
    }
  }, [selectedKecamatan]);

  console.log("article", article);

  function pilihKecamatan() {
    const pilihKecamatans: Kecamatan = kecamatans.find(
      (f) => f.id === selectedKecamatan
    );
    return pilihKecamatans ? pilihKecamatans.kecamatan : "Pilih Kecamatan";
  }

  const waiting = (
    <div className={Styles.WaitingContent}>
      <Image src={Search} alt="Search" />
      <h3>Oppss..</h3>
      <h3>Belum Memilih Kecamatan</h3>
      <p>Silahkan isi kecamatan disebelah kiri atas</p>
    </div>
  );

  const contentKecamatan = <PaginationContent data={article} />;

  console.log("content", contentKecamatan);

  function LoadContentKecamatan() {
    const pilihKecamatans: Kecamatan = kecamatans.find(
      (f) => f.id === selectedKecamatan
    );
    return pilihKecamatans ? (
      article.length === 0 ? (
        <KecamatanLoader />
      ) : (
        contentKecamatan
      )
    ) : (
      waiting
    );
  }

  return (
    <>
      <section className="mb-5" style={{ backgroundColor: "#0C0717" }}>
        <Navbars />
      </section>

      <Container>
        <section className={Styles.Breadcrumb}>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a className="text-decoration-none" href="/">
                  Beranda
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Kecamatan
              </li>
            </ol>
          </nav>
        </section>
        <Dropdown
          className={Styles.Dropdown}
          onSelect={(e: string) => setSelectedKecamatan(Number(e))}
        >
          <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
            {pilihKecamatan()}
          </Dropdown.Toggle>

          <Dropdown.Menu as={CustomMenu}>
            {kecamatans.map((kec) => {
              return (
                <Dropdown.Item key={kec.id} eventKey={kec.id.toString()}>
                  {kec.kecamatan}
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>
        <Row className={Styles.Content}>
          <Col className="hai" md="8" lg="8">
            {LoadContentKecamatan()}
          </Col>
          <Col className="d-none d-md-block" md="4" lg="4">
            <SideInformasi />
            <SideInformasi />
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
