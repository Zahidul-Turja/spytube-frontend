"use client";
import { getAuthUrl } from "@/lib/api";

export default function LoginPage() {
  const handleLogin = async () => {
    const data = await getAuthUrl();
    window.location.href = data.auth_url;
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Login with Google</h1>
      <button onClick={handleLogin}>Login</button>
    </main>
  );
}
