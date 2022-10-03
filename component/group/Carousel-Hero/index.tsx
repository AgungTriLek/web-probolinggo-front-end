import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { AllArticleTypes } from "../../../API/data-types";
import { AllArtikle } from "../../../API/Home";
import Styles from "../../../styles/CarouselHero.module.css";
import { CardLoading } from "../../basic/loading";

export default function CarouselHero() {
  const [article, setArticle] = useState([]);
  // const [articleHero, setArticleHero] = useState([]);
  const [indicators, setIndicators] = useState(0);
  const [loading, setLoading] = useState(true);

  const AllArtikleList = useCallback(async () => {
    const data = await AllArtikle();
    const reverseData = data.reverse();
    // console.log(reverseData);
    setArticle(
      reverseData.filter((item: AllArticleTypes, index: number) => index < 10)
    );
    setLoading(false);
  }, [AllArtikle]);

  useEffect(() => {
    AllArtikleList();
  }, []);

  const API_IMG = process.env.NEXT_PUBLIC_IMG;
  const myloader = ({ src }: { src: string }) => `${API_IMG}/${src}`;

  const ContentHero = article.map((item: AllArticleTypes) => (
    <Carousel.Item key={item._id}>
      <Image
        loader={myloader}
        className="d-block w-100"
        src={item.file}
        height={600}
        width={1200}
        objectFit="cover"
        alt="First slide"
      />
      <Carousel.Caption className={Styles.gradasi}>
        <h3>{item.title}</h3>
      </Carousel.Caption>
    </Carousel.Item>
    // <div
    //   key={item._id}
    //   className={`carousel-item ${index === indicators ? "active" : ""}`}
    // >
    //   <Image
    //     loader={myloader}
    //     src={`${item.file}`}
    //     height={600}
    //     width={1200}
    //     objectFit="cover"
    //     className="d-block"
    //     alt="Gambar"
    //   />
    //   <div className={`carousel-caption d-none d-md-block  ${Styles.gradasi}`}>
    //     <h5 className="pb-2">{item.title}</h5>
    //   </div>
    // </div>
  ));

  const imgLoadingHero = (
    <div className="carousel-item active">
      <CardLoading />
    </div>
  );

  const LoadingHero = (
    <Carousel.Item>
      <CardLoading />
    </Carousel.Item>
  );

  return <Carousel>{loading === false ? ContentHero : LoadingHero}</Carousel>;
}
