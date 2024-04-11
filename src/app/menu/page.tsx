import Layout from "@/components/ui/layout/globalLayout";
import styles from "./menu.module.css";
import Search from "@/components/search/search";
import { MdAdd } from "react-icons/md";

export default function Menu() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.topBar}>
          <Search />
          <button className={styles.addBtn}>
            <MdAdd size={30} />
          </button>
        </div>
        <div>Menu</div>
      </div>
    </Layout>
  );
}
