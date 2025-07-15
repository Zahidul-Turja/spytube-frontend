"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import userStore from "@/stores/userStore";
import { checkToken } from "@/lib/api";

export default function HomePage() {
  const router = useRouter();

  const { isAuthenticated, setIsAuthenticated } = userStore();

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) return;

    const checkAuth = async () => {
      const res = await checkToken(token);
      if (res.detail === "Unauthorized") {
        localStorage.removeItem("access_token");
        setIsAuthenticated(false);
      } else {
        setIsAuthenticated(true);
      }
    };

    checkAuth();
  }, [setIsAuthenticated]);

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/dashboard");
    }
  }, [isAuthenticated, router]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome to SpyTube</h1>
      <a href="/login">Go to Login</a>
    </main>
  );
}
