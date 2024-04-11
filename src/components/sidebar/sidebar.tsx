"use client";

import styles from "./sidebar.module.css";
import Link from "next/link";
import Image from "next/image";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineUsers } from "react-icons/hi2";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { RiHome2Line } from "react-icons/ri";
import { IoRestaurantOutline } from "react-icons/io5";
import { BiFoodMenu } from "react-icons/bi";
import { IoLogOutOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { MdPowerSettingsNew } from "react-icons/md";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.backOfficeLogo}
          src="/logo-e-food.png"
          width="200"
          height="80"
          alt="logo"
        />
        <Image
          className={styles.userImage}
          src="/user-image.jpeg"
          width="50"
          height="50"
          alt="user-image"
        />
        <div className={styles.userDetail}>
          <span className={styles.userName}>John Doe</span>
          <span className={styles.userTitle}>Restaurant La Tulipe</span>
        </div>
      </div>
      <nav className={styles.menuList}>
        <Link
          href="/"
          className={`${styles.link} ${pathname === "/" ? styles.active : ""}`}
        >
          <RiHome2Line />
          <p>Tableau de bord</p>
        </Link>
        <Link
          href="/plats"
          className={`${styles.link} ${
            pathname === "/plats" ? styles.active : ""
          }`}
        >
          <IoRestaurantOutline />
          <p>Plats</p>
        </Link>
        <Link
          href="/menu"
          className={`${styles.link} ${
            pathname === "/menu" ? styles.active : ""
          }`}
        >
          <BiFoodMenu />
          <p>Menu</p>
        </Link>
        <Link
          href="/commandes"
          className={`${styles.link} ${
            pathname === "/commandes" ? styles.active : ""
          }`}
        >
          <HiOutlineClipboardDocumentList />
          <p>Commandes</p>
        </Link>
        <Link
          href="/utilisateurs"
          className={`${styles.link} ${
            pathname === "/utilisateurs" ? styles.active : ""
          }`}
        >
          <HiOutlineUsers />
          <p>Utilisateurs</p>
        </Link>
        <Link
          href="/configurations"
          className={`${styles.link} ${
            pathname === "/configurations" ? styles.active : ""
          }`}
        >
          <IoSettingsOutline />
          <p>Configurations</p>
        </Link>
      </nav>
      <Link href="#" className={styles.logOut}>
        <IoLogOutOutline size={30} />
      </Link>
    </div>
  );
};

export default Sidebar;
