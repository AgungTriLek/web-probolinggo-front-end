import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Styles from "../../../styles/Geograf.module.css";

export default function Geografis() {
  return (
    <Container>
      <div className={`${Styles.Geo}`}>
        <h4>Kondisi Geografis</h4>
      </div>
      <div className="img-geografis mt-3">
        <iframe
          title="agung"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212711.05333199332!2d113.27478050388248!3d-7.846345679808039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6538d9564fb35%3A0x3027a76e352bde0!2sKabupaten%20Probolinggo%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1654860801431!5m2!1sid!2sid"
          width="100%"
          height="450"
          style={{ border: "0" }}
          loading="lazy"
        />
      </div>
      <Row>
        <div className="mt-3">
          <p>
            Kabupaten Probolinggo merupakan salah satu Kabupaten yang terletak
            di Provinsi Jawa Timur berada pada posisi 112'50' – 113'30' Bujur
            Timur (BT) dan 7'40' – 8'10' Lintang Selatan (LS), dengan luas
            wilayah sekitar 169.616,65 Ha atau + 1.696,17 km2 (1,07 % dari luas
            daratan dan lautan Propinsi Jawa Timur).
          </p>
        </div>
        <Col>
          <p>
            <strong>Dengan rincian sebagai berikut :</strong>
          </p>
          <ul>
            <li>Permukiman : 147,74 Km2</li>
            <li>Persawahan : 373,13 Km2</li>
            <li>Tegal : 513,80 Km2</li>
            <li>Perkebunan : 32,81 Km2</li>
            <li>Hutan : 426,46 Km2</li>
            <li>Tambak/Kolam : 13,99 Km2</li>
            <li>Pulau Gili Ketapang : 0,60 Km2</li>
            <li>Lain-lain : 188,24 Km2</li>
          </ul>
        </Col>
        <Col>
          <p>
            <strong>Wilayah Kabupaten Probolinggo berbatasan dengan :</strong>
          </p>
          <ul>
            <li>Sebelah Utara : Selat Madura</li>
            <li>Sebelah Timur : Kabupaten Situbondo dan Kabupaten Jember</li>
            <li>Sebelah Barat : Kabupaten Pasuruan</li>
            <li>Sebelah Selatan : Kabupaten Lumajang dan Kabupaten Malang</li>
            <li>
              Sedangkan di sebelah Utara bagian tengah terdapat Daerah Otonom
              yaitu Kota Probolinggo
            </li>
          </ul>
        </Col>
        <div className="pt-5">
          <p>
            Dilihat dari geografisnya Kabupaten Probolinggo terletak di lereng
            pegunungan yang membujur dari Barat ke Timur, yaitu Gunung Semeru,
            Argopuro, Lamongan dan Tengger. Selain itu terdapat gunung lainnya,
            yaitu Gunung Bromo, Widodaren, Gilap, Gambir, Jombang, Cemoro
            Lawang, Malang dan Batujajar. Dilihat dari ketinggian berada pada
            0-2500 m diatas permukaan laut dengan temperatur rata-rata 27'C –
            30'C.
          </p>
          <p>
            Lokasi Kabupaten Probolinggo yang berada di sekitar garis
            khatulistiwa menyebabkan daerah ini mengalami perubahan iklim dua
            jenis setiap tahun, yaitu musim kemarau dan musim penghujan. Untuk
            musim kemarau berkisar pada bulan April hingga bulan Oktober dengan
            rata-rata curah hujan + 29,5 mm per hari hujan, sedangkan musim
            penghujan dari bulan Oktober hingga bulan April dengan rata-rata
            curah hujan + 229 mm per hari hujan. Curah hujan yang cukup tinggi
            terjadi pada bulan Desember sampai dengan bulan Maret dengan
            rata-rata curah hujan + 360 mm per hari hujan. Diantara dua musim
            tersebut terdapat musim pancaroba yang biasanya ditandai dengan
            tiupan angin kering yang cukup kencang yang berhembus dari arah
            Tenggara ke Barat Laut biasa disebut “Angin Gending”
          </p>
          <p>
            Selain itu Kabupaten Probolinggo memiliki beberapa obyek wisata
            yaitu Gunung Bromo, Air Terjun Madakaripura, Pulau Gili Ketapang
            dengan taman lautnya, Pantai Bentar, Arum Jeram Sungai Pekalen, Ranu
            Segaran dan Sumber Air Panas serta Candi Jabung yang mencerminkan
            kejayaan masa lalu.
          </p>
          <p>
            Adapun pembagian wilayah administratif, secara yuridis formal
            dibentuk dengan Undang-Undang Nomor 12 Tahun 1950 Tentang
            Pembentukan Daerah- daerah Kabupaten Dalam Lingkungan Propinsi Jawa
            Timur, yang terdiri dari 24 wilayah Kecamatan, 325 Desa dan 5
            Kelurahan, 1.642 Rukun Warga (RW) dan 5.864 Rukun Tetangga (RT)
          </p>
        </div>
      </Row>
    </Container>
  );
}
