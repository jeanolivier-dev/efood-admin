"use client"
import {DeleteDishe} from "@/action/plats";
import styles from "@/app/plats/plats.module.css";
import Image from "next/image";
import product_image from "@/assets/img/noproduct.jpg";
import Link from "next/link";

type TPlats = {
  id: string;
  name: string;
  description: string;
  img: string;
  price: number;
  menu: string;
  online: boolean;
  createdAt: Date
}[]

export default function DisheList({plats}:{plats: TPlats}) {

  async function handleDelete(id: string) {
    await DeleteDishe(id)
  }

  if (plats.length === 0) return <p>Pas de plats</p>
  return (
    <>
      {plats.map(({name, description, id, price, createdAt}) => (
        <tbody key={id}>
        <td>{id}</td>
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
        <td>{price}</td>
        <td>02.03.2024</td>
        <td>
          <div className={styles.buttons}>
            <Link href="/menu/test">
              <button className={`${styles.button} ${styles.view}`}>
                Modifier
              </button>
            </Link>
            <button onClick={() => handleDelete(id)} className={`${styles.button} ${styles.delete}`}>
              Supprimer
            </button>
          </div>
        </td>
        </tbody>
      ))}
    </>
  )
}