"use client";
import { useEffect, useState } from "react";
import { getDashboardData } from "@/lib/api";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const [data, setData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) return router.push("/login");

    (async () => {
      const res = await getDashboardData(token);
      if (res.detail === "Unauthorized") {
        localStorage.removeItem("access_token");
        router.push("/login");
      } else {
        setData(res);
      }
    })();
  }, [router]);

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Dashboard</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : "Loading..."}
    </main>
  );
}
