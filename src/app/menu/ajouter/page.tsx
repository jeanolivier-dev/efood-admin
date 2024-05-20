
import Layout from "@/components/ui/layout/globalLayout";
import styles from "./ajouterUnMenu.module.css";
import Form from "@/app/menu/ajouter/Form";
import client from "@/libs/prismadb";


export default async function AjouterUnMenu(){
  const menu = await client.menu.findMany()
  return (
  <Layout>
    <div className={styles.container}>
      <Form menu={menu}/>
    </div>
  </Layout>
);}

