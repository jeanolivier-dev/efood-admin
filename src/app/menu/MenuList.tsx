"use client";
import styles from "@/app/menu/menu.module.css";
import Image from "next/image";
import product_image from "@/assets/img/noproduct.jpg";
import Link from "next/link";
import { DeleteMenu } from "@/action/menu";

export type TMenu = {
  id: string;
  name: string;
  description: string;
  img: string;
  online: boolean;
  createdAt: Date;
}[];
export default function MenuList({ menu }: { menu: TMenu }) {
  async function handleDelete(id: string) {
    await DeleteMenu(id);
  }
  return (
    <>
      {menu.map(({ name, description, id, createdAt }) => (
        <tbody key={id}>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src={product_image}
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                {name}
              </div>
            </td>
            <td>{description}</td>
            <td>4</td>
            <td>02.03.2024</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/menu/test">
                  <button className={`${styles.button} ${styles.view}`}>
                    Modifier
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(id)}
                  className={`${styles.button} ${styles.delete}`}
                >
                  Supprimer
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      ))}
    </>
  );
}
