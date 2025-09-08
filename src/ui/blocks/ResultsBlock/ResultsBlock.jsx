"use client";

import { useEffect, useState } from "react";
import DataTable from "@/ui/components/DataTable";

export default function ResultsBlock() {
  const [dataJson, setDataJson] = useState(null);

  useEffect(() => {
    fetch("/data/results.json")
      .then((res) => res.json())
      .then((data) => setDataJson(data));
  }, []);

  if (!dataJson) return <p>Завантаження...</p>;

  return <DataTable title="Проміжні результати" dataJson={dataJson} />;
}