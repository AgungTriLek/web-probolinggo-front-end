import Image from "next/image";
import React from "react";

interface imgSwiper {
  gambar: string;
}
export default function ImgSwiperCategory(props: imgSwiper) {
  const { gambar } = props;

  const API_IMG = process.env.NEXT_PUBLIC_IMG;
  const myloader = ({ src }: { src: string }) => `${API_IMG}/${src}`;

  return (
    <Image
      loader={myloader}
      width={500}
      height={350}
      src={gambar}
      alt="gambar"
    />
  );
}
