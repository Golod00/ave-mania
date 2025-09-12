'use client';

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import classes from "./DataTable.module.scss";

gsap.registerPlugin(ScrollTrigger);

export default function DataTable({ title, dataJson, id }) {
  const { tabs, columns, dataByTab } = dataJson;
  const [activeTab, setActiveTab] = useState("all");

  const filteredData =
    activeTab === "all"
      ? Object.values(dataByTab).flat()
      : dataByTab[activeTab] || [];

  const rowsRef = useRef([]);

  useEffect(() => {
    rowsRef.current = rowsRef.current.slice(0, filteredData.length);

    gsap.fromTo(
      rowsRef.current,
      { opacity: 0, y: 20, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.5)",
        stagger: 0.1,
        scrollTrigger: {
          trigger: rowsRef.current[0],
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, [filteredData]);

  return (
    <section id={id} className={classes.wrapper}>
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
                <tr
                  key={index}
                  ref={(el) => (rowsRef.current[index] = el)}
                >
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
