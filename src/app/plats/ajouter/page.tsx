import Layout from "@/components/ui/layout/globalLayout";
import styles from "./ajouterUnPlat.module.css"
import Form from "@/app/plats/ajouter/Form";
import client from "@/libs/prismadb";




export default async function AjouterUnPlat() {
  const menu = await client.menu.findMany()
  return (
    <Layout>
      <div className={styles.container}>
        <Form menu={menu}/>
      </div>
    </Layout>
  );
}