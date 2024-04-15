"use client";

import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import styles from "./chart.module.css";

const data = [
  {
    jour: "lundi",
    visites: 3000,
    clics: 1398,
  },
  {
    jour: "Mardi",
    visites: 2000,
    clics: 3800,
  },
  {
    jour: "Mercredi",
    visites: 2780,
    clics: 3908,
  },
  {
    jour: "Jeudi",
    visites: 1890,
    clics: 4800,
  },
  {
    jour: "Vendredi",
    visites: 3000,
    clics: 1398,
  },
  {
    jour: "Samedi",
    visites: 2390,
    clics: 3800,
  },
  {
    jour: "Dimanche",
    visites: 3000,
    clics: 1398,
  },
];

export default function Chart() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Récapitulatif de la semaine</h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="jour" />
          <YAxis />
          <Tooltip contentStyle={{ background: "#f6efcb", border: "none" }} />
          <Legend />
          <Line
            type="monotone"
            dataKey="visites"
            stroke="#8884d8"
            strokeDasharray="5 5"
          />
          <Line
            type="monotone"
            dataKey="clics"
            stroke="#82ca9d"
            strokeDasharray="3 4 5 2"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
