import Link from "next/link";
import React from "react";
import Styles from "../../../styles/Navbar.module.css";

interface MenuProps {
  title: string;
  linkPage: string;
}
export default function MenuNav(props: MenuProps) {
  const { title, linkPage } = props;
  return (
    <Link href={`${linkPage}`}>
      <a className={`nav-link ${Styles.textsAnchor}`}>{title}</a>
    </Link>
  );
}
