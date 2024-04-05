"use client";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";
import { MdSearch, MdOutlineMessage } from "react-icons/md";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathname.split("/").pop()}</div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <MdSearch size={20} />
          <input
            type="text"
            placeholder="Recherche..."
            className={styles.input}
          />
        </div>
        <div className={styles.icon}>
          <MdOutlineMessage size={30} />
        </div>
      </div>
    </div>
  );
}
