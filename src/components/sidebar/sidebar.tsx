"use client";

import styles from "./sidebar.module.css";
import Link from "next/link";
import Image from "next/image";
import logo_efood from "@/assets/img/logo-e-food.png";
import user_image from "@/assets/img/user-image.jpeg";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineUsers } from "react-icons/hi2";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { RiHome2Line } from "react-icons/ri";
import { IoRestaurantOutline } from "react-icons/io5";
import { BiFoodMenu } from "react-icons/bi";
import { IoLogOutOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.backOfficeLogo}
          src={logo_efood}
          width="150"
          height="60"
          alt="logo"
        />
      </div>
      <div className={styles.userInformations}>
        <Image
          className={styles.userImage}
          src={user_image}
          width="40"
          height="40"
          alt="user-image"
        />
        <div className={styles.userDetail}>
          <span className={styles.userTitle}>Admin</span>
        </div>
      </div>
      <nav className={styles.menuList}>
        <Link
          href="/"
          className={`${styles.link} ${pathname === "/" ? styles.active : ""}`}
        >
          <RiHome2Line size={20} />
          <p>Tableau de bord</p>
        </Link>
        <Link
          href="/plats"
          className={`${styles.link} ${
            pathname === "/plats" ? styles.active : ""
          }`}
        >
          <IoRestaurantOutline size={20} />
          <p>Plats</p>
        </Link>
        <Link
          href="/menu"
          className={`${styles.link} ${
            pathname === "/menu" ? styles.active : ""
          }`}
        >
          <BiFoodMenu size={20} />
          <p>Menu</p>
        </Link>
        <Link
          href="/commandes"
          className={`${styles.link} ${
            pathname === "/commandes" ? styles.active : ""
          }`}
        >
          <HiOutlineClipboardDocumentList size={20} />
          <p>Commandes</p>
        </Link>
        <Link
          href="/utilisateurs"
          className={`${styles.link} ${
            pathname === "/utilisateurs" ? styles.active : ""
          }`}
        >
          <HiOutlineUsers size={20} />
          <p>Utilisateurs</p>
        </Link>
        <Link
          href="/parametres"
          className={`${styles.link} ${
            pathname === "/parametres" ? styles.active : ""
          }`}
        >
          <IoSettingsOutline size={20} />
          <p>Paramètres</p>
        </Link>
      </nav>
      <button onClick={() => signOut()} className={styles.logOut}>
        <IoLogOutOutline size={40} />
      </button>
    </div>
  );
};

export default Sidebar;
