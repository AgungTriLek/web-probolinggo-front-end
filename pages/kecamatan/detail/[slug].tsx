import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { AllPengumuman } from "../../../API/data-types";
import { DetailKecamatan } from "../../../API/Home";
import Footer from "../../../component/group/Footer";
import Navbars from "../../../component/group/Navbar";
import Styles from "../../../styles/KecamatanDetail.module.css";

export default function DetailContentKecamatan() {
  const { query, isReady } = useRouter();
  const [file, setFile] = useState([]);

  const detailFileKecamatan = useCallback(async (id: any) => {
    const data = await DetailKecamatan(id);
    setFile(data);
  }, []);

  useEffect(() => {
    if (isReady) {
      detailFileKecamatan(query.slug);
      console.log("slug", query.slug);
    } else {
      console.log("tidak tersedia");
    }
  }, [isReady]);

  function date(e: any) {
    return new Date(e);
  }

  function download(files: any) {
    const URL = `https://server-probolinggo.herokuapp.com/uploads/${files}`;
    // if (typeof window !== "undefined") {
    //   window.location.href = URL;
    // }
    return (
      <a
        className="text-decoration-none"
        rel="noreferrer"
        href={`data:application/pdf,${URL}`}
        target="_blank"
        download={files}
      >
        Download
      </a>
    );
  }

  return (
    <>
      <section className="mb-5" style={{ backgroundColor: "#0C0717" }}>
        <Navbars />
      </section>

      <Container style={{ height: "100vh" }}>
        {file.map((item: AllPengumuman) => (
          <div className={Styles.Container}>
            <Table hover>
              <thead>
                <tr>
                  <th colSpan={4} className="text-center">
                    <h3>{item.title}</h3>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>File</td>
                  <td>:</td>
                  <td>{item.file}</td>
                  <td>{download(item.file)}</td>
                </tr>
                <tr>
                  <td>upload</td>
                  <td>:</td>
                  <td>{date(item.createdAt).toLocaleDateString()}</td>
                  <td>-</td>
                </tr>
              </tbody>
            </Table>
          </div>
        ))}
      </Container>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
