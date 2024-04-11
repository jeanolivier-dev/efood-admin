import { MdSearch } from "react-icons/md";
import styles from "./search.module.css";

export default function Search() {
  return (
    <div className={styles.search}>
      <MdSearch />
      <input
        className={styles.input}
        type="text"
        placeholder="Rechercher dans ..."
      />
    </div>
  );
}
