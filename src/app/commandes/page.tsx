import Layout from "@/components/ui/layout/globalLayout";
import styles from "./orders.module.css";
import Search from "@/components/search/search";

export default function Commandes() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.topBar}>
          <Search />
        </div>
        <div>Commandes</div>
      </div>
    </Layout>
  );
}
