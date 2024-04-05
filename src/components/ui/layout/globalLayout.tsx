import Sidebar from "@/components/sidebar/sidebar";
import styles from "./globalLayout.module.css";
import Navbar from "@/components/navbar/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        {children}
      </div>
    </main>
  );
}
