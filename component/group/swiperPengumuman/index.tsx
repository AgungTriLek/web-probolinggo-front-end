import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "./slider.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper";
import { Col, Row } from "react-bootstrap";
import Styles from "../../../styles/SwiperPengumuman.module.css";
import Gambar1 from "../../../public/icon/pengumuman.png";
import { Pengumuman } from "../../../API/Home";
import { AllPengumuman } from "../../../API/data-types";
import { CardLoadingPengumuman } from "../../basic/loading";

export default function SwiperPengumuman() {
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);

  const PengumumanList = useCallback(async () => {
    const data = await Pengumuman();
    setArticle(data);
    setLoading(false);
  }, [Pengumuman]);

  useEffect(() => {
    PengumumanList();
  }, []);

  function date(e: any) {
    return new Date(e);
  }

  const sliderPengumuman = (
    <SwiperSlide>
      <CardLoadingPengumuman />
    </SwiperSlide>
  );

  const ContentPengumuman = article.map((item: AllPengumuman) => (
    <SwiperSlide key={item._id}>
      <Row className={` row-cols-1 ${Styles.cardSwiper} `}>
        <Col className="text-center p-0">
          <Image src={Gambar1} alt="Gambar" />
        </Col>
        <Col className={` ${Styles.titleSwiper}`}>
          <h5 className={Styles.Title}>{item.title}</h5>
        </Col>
        <Col className={`${Styles.timeSwiper}`}>
          <small>{date(item.updatedAt).toDateString()}</small>
        </Col>
      </Row>
    </SwiperSlide>
  ));

  const LoadingPengumuman = (
    <>
      {sliderPengumuman}
      {sliderPengumuman}
      {sliderPengumuman}
      {sliderPengumuman}
      {sliderPengumuman}
    </>
  );

  return (
    <Swiper
      breakpoints={{
        768: {
          slidesPerView: 4,
        },
      }}
      slidesPerView={2}
      spaceBetween={8}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {loading === false ? ContentPengumuman : LoadingPengumuman}
    </Swiper>
  );
}
