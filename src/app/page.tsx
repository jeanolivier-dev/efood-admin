import Layout from "@/components/ui/layout/globalLayout";
import styles from "./page.module.css";
import Card from "@/components/card/card";
import Transactions from "@/components/transactions/transactions";
import Chart from "@/components/chart/chart";
import Rightbar from "@/components/rightbar/rightbar";

export default function TableauDeBord() {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.main}>
          <div className={styles.cards}>
            <Card />
            <Card />
            <Card />
          </div>
          <Transactions />
          <Chart />
        </div>
        <div className={styles.side}>
          <Rightbar />
        </div>
      </div>
    </Layout>
  );
}
