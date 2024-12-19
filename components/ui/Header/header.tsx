"use client";
import Link from "next/link";

import { usePathname } from "next/navigation";

import styles from "./styles.module.scss";

const NAV_LIST = [
  { text: "Home", link: "/" },
  { text: "About", link: "/about" },
  { text: "Projects", link: "/projects" },
];

const Header = () => {
  const pathname = usePathname();
  return (
    <header className={styles.header}>
      <div>Logo</div>
      <ul className={styles.header__nav}>
        {NAV_LIST.map((item, index) => (
          <li
            key={`nav-${index}`}
            className={`${pathname === item.link ? styles.selected : ""}`}
          >
            <Link href={item.link}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
