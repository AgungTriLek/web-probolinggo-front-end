import React from "react";
import Styles from "../../../styles/Loading.module.css";

export function CardLoading() {
  return <div className={`${Styles.Loading}`} />;
}

export function CardLoadingPengumuman() {
  return (
    <div className={`row row-cols-1 ${Styles.cardLoadingPengumuman} `}>
      <div className={`col p-0 ${Styles.imgLoadingPengumuman} `} />
      <div className={`col `}>
        {" "}
        <div className={`${Styles.titleLoadingPengumuman}`} />
      </div>
      <div className={`col `}>
        <div className={`${Styles.timeLoadingPengumuman}`} />
      </div>
    </div>
  );
}

export function CardLoadingCategory() {
  return <div className={`${Styles.cardLoadingCategory}`} />;
}
export function TitleLoadingCategory() {
  return <div className={`${Styles.titleLoadingCategory}`} />;
}
export function TextsLoadingCategory() {
  return (
    <div>
      <div className={`${Styles.textsLoadingCategory}`} />
      <div className={`${Styles.textsLoadingCategory}`} />
      <div className={`${Styles.textsLoadingCategory}`} />
      <div className={`${Styles.textsLoadingCategory}`} />
      <div className={`${Styles.textsLoadingCategory}`} />
      <div className={`${Styles.textsLoadingCategory}`} />
      <div className={`${Styles.textsLoadingCategory}`} />
    </div>
  );
}

export function KecamatanLoader() {
  return (
    <>
      <div className={Styles.Loader} />
      <div className={Styles.Loader} />
      <div className={Styles.Loader} />
      <div className={Styles.Loader} />
      <div className={Styles.Loader} />
    </>
  );
}
