import Layout from "@/components/ui/layout/globalLayout";
import styles from "./ajouterUnPlat.module.css"
import Form from "@/app/plats/ajouter/Form";
import client from "@/libs/prismadb";





export default async function AjouterUnPlat() {
  const plats = await client.plats.findMany()
  return (
    <Layout>
      <div className={styles.container}>
        <Form plats={plats}/>
      </div>
    </Layout>
  );
}