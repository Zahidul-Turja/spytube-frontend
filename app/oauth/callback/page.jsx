"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { exchangeCodeForToken } from "@/lib/api";

export default function CallbackPage() {
  const params = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const code = params.get("code");
    if (code) {
      (async () => {
        const data = await exchangeCodeForToken(code);
        localStorage.setItem("access_token", data.access_token);
        router.push("/dashboard");
      })();
    }
  }, [params, router]);

  return <p>Authenticating...</p>;
}
