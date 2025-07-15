"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import userStore from "@/stores/userStore";
import { checkToken, getAuthUrl } from "@/lib/api";

export default function LoginPage() {
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

  const handleLogin = async () => {
    const data = await getAuthUrl();
    window.location.href = data.auth_url;
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6">
        <div className="text-2xl font-bold">SpyTube</div>
        <div className="flex items-center space-x-6">
          <a
            href="/"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white transition-colors"
          >
            About
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-8">
        <div className="max-w-md w-full">
          <div className="border border-gray-300 rounded-lg p-8 relative overflow-hidden">
            {/* Animated Dots */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <div
                className="absolute top-8 right-8 w-1 h-1 bg-gray-400 rounded-full animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute bottom-6 left-8 w-1 h-1 bg-gray-400 rounded-full animate-pulse"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center">
              <h1 className="text-3xl font-bold mb-2">Welcome back</h1>
              <p className="text-gray-400 mb-6">
                Sign in to your SpyTube account
              </p>

              {/* Google Auth Button Only */}
              <button
                onClick={handleLogin}
                className="w-full bg-white text-black font-medium py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center space-x-3 group cursor-pointer"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  className="transition-transform group-hover:scale-110"
                >
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span>Continue with Google</span>
              </button>
            </div>
          </div>

          {/* Footer Links */}
          <div className="mt-8 text-center text-gray-500 text-sm">
            By signing in, you agree to our{" "}
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </main>

      {/* Background animation */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute top-1/4 left-1/4 w-32 h-32 border border-gray-700 rounded-lg animate-pulse"
            style={{ animationDuration: "4s" }}
          ></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-gray-700 rounded-full animate-pulse"
            style={{ animationDuration: "6s", animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/2 right-1/3 w-16 h-16 border border-gray-700 rounded-lg animate-pulse"
            style={{ animationDuration: "5s", animationDelay: "1s" }}
          ></div>
        </div>
      </div>
    </div>
  );
}
