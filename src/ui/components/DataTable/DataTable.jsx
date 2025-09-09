"use client";

import { useState } from "react";
import classes from "./DataTable.module.scss";
import TextTitle from '@/ui/components/TextTitle';

export default function DataTable({ title, dataJson }) {
  const { tabs, columns, dataByTab } = dataJson;

  const [activeTab, setActiveTab] = useState("all");

  const filteredData =
    activeTab === "all"
      ? Object.values(dataByTab).flat()
      : dataByTab[activeTab] || [];

  return (
    <section className={classes.wrapper}>
        <div className="container">
            <h2 className={classes.title}>{title}</h2>

            <div className={classes.tabs}>
                <button
                onClick={() => setActiveTab("all")}
                className={`${classes.tab} ${activeTab === "all" ? classes.active : ""}`}
                >
                Усі
                </button>
                {tabs.map((tab) => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`${classes.tab} ${activeTab === tab ? classes.active : ""}`}
                >
                    {tab}
                </button>
                ))}
            </div>

            <div className={classes.tableWrapper}>
                <table className={classes.table}>
                <thead>
                    <tr>
                    {columns.map((col) => (
                        <th key={col.key}>{col.label}</th>
                    ))}
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((row, index) => (
                    <tr key={index}>
                        {columns.map((col) => (
                        <td key={col.key}>{row[col.key]}</td>
                        ))}
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </div>
    </section>
  );
}