import React, { useCallback, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow, Navigation } from "swiper";
import DOMPurify from "dompurify";
import Link from "next/link";
import ImgSwiperCategory from "../../basic/swipercategory/ImgSwiperCategory";
import Styles from "../../../styles/SwiperCategory.module.css";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { AllArtikle, CategoryInformasi } from "../../../API/Home";
import { AllArticleTypes } from "../../../API/data-types";
import {
  CardLoadingCategory,
  TextsLoadingCategory,
  TitleLoadingCategory,
} from "../../basic/loading";
import { Col, Container, Row } from "react-bootstrap";

interface TitleCategory {
  title1: string;
  title2: string;
  title3: string;
  title4: string;
}

export default function SwiperCategory(Props: TitleCategory) {
  const { title1, title2, title3, title4 } = Props;
  const [pemerintahan, setPemerintahan] = useState<AllArticleTypes[]>([]);
  const [pendidikan, setPendidikan] = useState<AllArticleTypes[]>([]);
  const [kesehatan, setKesehatan] = useState<AllArticleTypes[]>([]);
  const [kemasyarakatan, setKemasyarakatan] = useState<AllArticleTypes[]>([]);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(0);

  const AllArticles = useCallback(async () => {
    const data = await AllArtikle();
    const reverseData = data.reverse();

    const dataPemerintahan = reverseData
      .filter((e: AllArticleTypes) => e.category.name === "Pemerintahan")
      .filter((unit: AllArticleTypes, index: number) => index < 5);
    const dataPendidikan = reverseData
      .filter((e: AllArticleTypes) => e.category.name === "Pendidikan")
      .filter((unit: AllArticleTypes, index: number) => index < 5);
    const dataKesehatan = reverseData
      .filter((e: AllArticleTypes) => e.category.name === "Kesehatan")
      .filter((unit: AllArticleTypes, index: number) => index < 5);
    const dataKemasyarakatan = reverseData
      .filter((e: AllArticleTypes) => e.category.name === "Kemasyarakatan")
      .filter((unit: AllArticleTypes, index: number) => index < 5);

    setPemerintahan(dataPemerintahan);
    setPendidikan(dataPendidikan);
    setKesehatan(dataKesehatan);
    setKemasyarakatan(dataKemasyarakatan);
    setLoading(false);
  }, [AllArtikle, CategoryInformasi]);

  useEffect(() => {
    AllArticles();
  }, []);

  const sliderLoding = (
    <SwiperSlide style={{ width: "300px" }}>
      <CardLoadingCategory />
    </SwiperSlide>
  );

  const LoadingCategory = (
    <>
      {sliderLoding}
      {sliderLoding}
      {sliderLoding}
      {sliderLoding}
      {sliderLoding}
    </>
  );

  const ContentPemerintahan = pemerintahan.map((item: AllArticleTypes) => (
    <SwiperSlide key={item._id} style={{ width: "300px" }}>
      <ImgSwiperCategory gambar={item.file} />
    </SwiperSlide>
  ));

  const ContentPendidikan = pendidikan.map((item: AllArticleTypes) => (
    <SwiperSlide key={item._id} style={{ width: "300px" }}>
      <ImgSwiperCategory gambar={item.file} />
    </SwiperSlide>
  ));

  const ContentKesehatan = kesehatan.map((item: AllArticleTypes) => (
    <SwiperSlide key={item._id} style={{ width: "300px" }}>
      <ImgSwiperCategory gambar={item.file} />
    </SwiperSlide>
  ));

  const ContentKemasyarakatan = kemasyarakatan.map((item: AllArticleTypes) => (
    <SwiperSlide key={item._id} style={{ width: "300px" }}>
      <ImgSwiperCategory gambar={item.file} />
    </SwiperSlide>
  ));

  return (
    <>
      <div className={Styles.containerCategory}>
        <Container>
          <Link href={`/informasi/${title1}`}>
            <a className="d-block  text-center text-md-start">
              <h4 className={` ${Styles.Title} blue `}>{title1}</h4>
            </a>
          </Link>
          <Row className={`pl-5 pr-5 pt-2 `}>
            <Col lg="6" className={Styles.TextResponsive}>
              <h3 className="text-center pb-1 mt-1">
                {loading === false ? (
                  pemerintahan[active].title
                ) : (
                  <TitleLoadingCategory />
                )}
              </h3>
              <article className="pb-5">
                {loading === false ? (
                  <>
                    <div
                      className={Styles.TextContent}
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(
                          pemerintahan[active].texts.substring(0, 600)
                        ),
                      }}
                    />
                    <div className={Styles.LinkCategory}>
                      <Link
                        href={`/informasi/artikel/${pemerintahan[active]._id}`}
                      >
                        <a>Baca Selengkapnya</a>
                      </Link>
                    </div>
                  </>
                ) : (
                  <TextsLoadingCategory />
                )}
              </article>
            </Col>

            <Col lg="6" className={`pt-5 pb-5`}>
              <Swiper
                effect="coverflow"
                onSlideChange={(e) => setActive(e.activeIndex)}
                slidesPerView="auto"
                centeredSlides={true}
                spaceBetween={-40}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Pagination, Navigation, EffectCoverflow]}
                coverflowEffect={{
                  scale: 0.7,
                  slideShadows: true,
                  rotate: 5,
                }}
                className="mySwiper"
              >
                {loading === false ? ContentPemerintahan : LoadingCategory}
              </Swiper>
            </Col>
          </Row>
        </Container>
      </div>

      <div className={Styles.containerCategory}>
        <Container>
          <Link href={`/informasi/${title2}`}>
            <a>
              <h4 className={`${Styles.Title} green `}>{title2}</h4>
            </a>
          </Link>
          <Row className={` pl-5 pr-5 pt-2 ${Styles.rowMobile}`}>
            <Col lg="6" className={Styles.TextResponsive}>
              <h3 className="text-center pb-1 mt-1">
                {loading === false ? (
                  pendidikan[active].title
                ) : (
                  <TitleLoadingCategory />
                )}
              </h3>
              <article onChange={(e) => e}>
                {loading === false ? (
                  <>
                    <div
                      className={Styles.TextContent}
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(
                          pendidikan[active].texts.substring(0, 600)
                        ),
                      }}
                    />
                    <div className={Styles.LinkCategory}>
                      <Link
                        href={`/informasi/artikel/${pendidikan[active]._id}`}
                      >
                        <a>Baca Selengkapnya</a>
                      </Link>
                    </div>
                  </>
                ) : (
                  <TextsLoadingCategory />
                )}
              </article>
            </Col>
            <Col lg="6" className={`pt-5 pb-5 ${Styles.bgImage}`}>
              <Swiper
                effect="coverflow"
                onSlideChange={(e) => setActive(e.activeIndex)}
                slidesPerView="auto"
                centeredSlides={true}
                spaceBetween={-40}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Pagination, Navigation, EffectCoverflow]}
                coverflowEffect={{
                  scale: 0.7,
                  slideShadows: true,
                  rotate: 5,
                }}
                className="mySwiper"
              >
                {loading === false ? ContentPendidikan : LoadingCategory}
              </Swiper>
            </Col>
          </Row>
        </Container>
      </div>

      <div className={Styles.containerCategory}>
        <Container>
          <Link href={`/informasi/${title3}`}>
            <a>
              <h4 className={`${Styles.Title} orange `}>{title3}</h4>
            </a>
          </Link>
          <Row className={`row pl-5 pr-5 pt-2 ${Styles.rowMobile}`}>
            <Col lg="6" className={Styles.TextResponsive}>
              <h3 className="text-center pb-1 mt-1">
                {loading === false ? (
                  kesehatan[active].title
                ) : (
                  <TitleLoadingCategory />
                )}
              </h3>
              <article onChange={(e) => e}>
                {loading === false ? (
                  <>
                    <div
                      className={Styles.TextContent}
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(
                          kesehatan[active].texts.substring(0, 600)
                        ),
                      }}
                    />
                    <div className={Styles.LinkCategory}>
                      <Link
                        href={`/informasi/artikel/${kesehatan[active]._id}`}
                      >
                        <a>Baca Selengkapnya</a>
                      </Link>
                    </div>
                  </>
                ) : (
                  <TextsLoadingCategory />
                )}
              </article>
            </Col>
            <Col lg="6" className={`pt-5 pb-5 ${Styles.bgImage}`}>
              <Swiper
                effect="coverflow"
                onSlideChange={(e) => setActive(e.activeIndex)}
                slidesPerView="auto"
                centeredSlides={true}
                spaceBetween={-40}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Pagination, Navigation, EffectCoverflow]}
                coverflowEffect={{
                  scale: 0.7,
                  slideShadows: true,
                  rotate: 5,
                }}
                className="mySwiper"
              >
                {loading === false ? ContentKesehatan : LoadingCategory}
              </Swiper>
            </Col>
          </Row>
        </Container>
      </div>

      <div className={Styles.containerCategory}>
        <Container>
          <Link href={`/informasi/${title4}`}>
            <a>
              <h4 className={`${Styles.Title} yellow `}>{title4}</h4>
            </a>
          </Link>
          <Row className={`row pl-5 pr-5 pt-2 ${Styles.rowMobile}`}>
            <Col lg="6" className={Styles.TextResponsive}>
              <h3 className="text-center pb-1 mt-1">
                {loading === false ? (
                  kemasyarakatan[active].title
                ) : (
                  <TitleLoadingCategory />
                )}
              </h3>
              <article onChange={(e) => e}>
                {loading === false ? (
                  <>
                    <div
                      className={Styles.TextContent}
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(
                          kemasyarakatan[active].texts.substring(0, 600)
                        ),
                      }}
                    />
                    <div className={Styles.LinkCategory}>
                      <Link
                        href={`/informasi/artikel/${kemasyarakatan[active]._id}`}
                      >
                        <a>Baca Selengkapnya</a>
                      </Link>
                    </div>
                  </>
                ) : (
                  <TextsLoadingCategory />
                )}
              </article>
            </Col>
            <Col lg="6" className={`pt-5 pb-5 ${Styles.bgImage}`}>
              <Swiper
                effect="coverflow"
                onSlideChange={(e) => setActive(e.activeIndex)}
                slidesPerView="auto"
                centeredSlides={true}
                spaceBetween={-40}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Pagination, Navigation, EffectCoverflow]}
                coverflowEffect={{
                  scale: 0.7,
                  slideShadows: true,
                  rotate: 5,
                }}
                className="mySwiper"
              >
                {loading === false ? ContentKemasyarakatan : LoadingCategory}
              </Swiper>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
