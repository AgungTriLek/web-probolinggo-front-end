import React from "react";
import Image from "next/image";
import { Container } from "react-bootstrap";

import Gambar1 from "../../../public/Imgs/logo_simbol.png";
import Sungai from "../../../public/Imgs/sungai.png";
import Warna from "../../../public/Imgs/Warna.png";
import Bendera from "../../../public/Imgs/bendera.png";
import Bintang from "../../../public/Imgs/bintang.png";
import DaunMangga from "../../../public/Imgs/daun mangga.png";
import Bunga from "../../../public/Imgs/bunga.png";
import Gunung from "../../../public/Imgs/gunung.png";
import Hutan from "../../../public/Imgs/hutan.png";
import Ombak from "../../../public/Imgs/ombak.png";
import Semboyan from "../../../public/Imgs/semboyan.png";
import Styles from "../../../styles/MaknaLogo.module.css";
import CardMaknaLogo from "../../basic/CardMaknaLogo";

export default function MaknaLogo() {
  return (
    <Container>
      <section>
        <div className={` text-center ${Styles.MaknaLogo}`}>
          <h4>Makna Logo</h4>
        </div>
        <div className="mt-5 mb-3 text-center">
          <Image height={238} width={186} src={Gambar1} alt="agung" />
        </div>
        <CardMaknaLogo
          Gambar={Bintang}
          width={80}
          height={80}
          Content="Bintang berwarna kuning merupakan pertanda KETUHANAN YANG MAHA ESA."
        />
        <CardMaknaLogo
          Gambar={Sungai}
          Content="Sungai sebagai pertanda “Sungai Banger”. Sebuah sungai yang semula
          memberi nama daerah Kabupaten ini pada zaman Bupati Probolinggo yang
          pertama Kiyai Tumenggung Djojolelono (tahun : 1746-1768)."
        />
        <CardMaknaLogo
          Gambar={Bendera}
          Content="Angin berwarna merah putih merupakan ciri khas dari daerah Kabupaten
          Probolinggo, yang terkenal dengan sebutan “ANGIN GENDING”. Angin
          yang arusnya sangat deras yang datang setiap musim kemarau dari arah
          tenggara."
        />
        <CardMaknaLogo
          Gambar={Gunung}
          Content="Gunung, sebagai pertanda “GUNUNG BROMO”. Sebuah gunung di daerah
          Kabupaten Probolinggo, terletak di Pegunungan Tengger dalam sebuah
          kaldera yang luas dengan garis tengahnya kurang lebih 11 (sebelas)
          kilometer."
        />
        <CardMaknaLogo
          Gambar={Hutan}
          Content="Dataran tanah berwarna hijau, merupakan pertanda keadaan tanah
          daerah Kabupaten Probolinggo yang cukup subur."
        />
        <CardMaknaLogo
          Gambar={Ombak}
          Content="Gelombang air laut, yang menunjukkan letak daerah Kabupaten
          Probolinggo di tepi pantai Selat Madura."
        />
        <CardMaknaLogo
          Gambar={Bunga}
          width={80}
          height={100}
          Content="Daun anggur sebanyak 4 (empat) helai berwarna hijau muda, dengan
          buah anggur 17 (tujuh belas) buah menunjukkan hasil buah-buahan khas
          daerah Kabupaten Probolinggo (terkenal sejak tahun 1913)."
        />
        <CardMaknaLogo
          Gambar={DaunMangga}
          width={60}
          height={100}
          Content="Daun mangga sebanyak 5 (lima) helai berwarna hijau, dengan buah
          mangga 8 (delapan) buah, menunjukkan buah-buahan yang terkenal di
          seluruh Indonesia dan di sekitarnya serta merupakan buah-buahan khas
          daerah Kabupaten Probolinggo."
        />
        <CardMaknaLogo
          Gambar={Semboyan}
          width={180}
          height={50}
          Content="Pita dasar dengan warna putih berisi Semboyan “PRASAJA NGESTI
          WIBAWA”. Makna semboyan : PRASAJA, berarti : bersahaja, terbuka,
          jujur, beres dan terus terang. NGESTI, berarti : menginginkan,
          menciptakan dan mempunyai tujuan.WIBAWA, berarti : mukti, luhur dan
          mulia. “PRASAJA NGESTI WIBAWA”, berarti : Dengan rasa tulus ikhlas
          bersahaja, beres menuju kemuliaan."
        />
        <CardMaknaLogo
          Gambar={Warna}
          height={80}
          width={80}
          Content="Warna Kuning berarti : Keagungan, Keluhuran, Kemuliaan."
          Content1="Warna Biru berarti : Kesetiaan."
          Content2="Warna Hijau berarti : Kesuburan, Kemakmuran."
        />
      </section>
    </Container>
  );
}
