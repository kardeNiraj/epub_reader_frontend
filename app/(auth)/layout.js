"use client";

import apiClient from "@/Services/apiClient";
import store from "@/utils/cookie";
import useToast from "@/utils/toaster/useToast";
import { Spinner } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

export default function AuthLayout({ children }) {
  const router = useRouter();
  const { showToast } = useToast();
  const [isLoading, setIsLoading] = useState(true);

  // used useEffect because want to check on page load
  useEffect(() => {
    const handleAuthCheck = async () => {
      const token = store.get("ebookUserToken");

      if (token) {
        try {
          // checking if the user token has active session
          const response = await apiClient.get("/api/user/status");

          if (response.data.data.isSessionActive) {
            // Redirect to home if session is active
            router.push("/home");
            return;
          }
        } catch (error) {
          const message =
            error?.message ||
            error?.response?.data?.message ||
            "Error checking session";
          showToast("error", "Error", message);
        } finally {
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
      }
    };

    handleAuthCheck();
  }, [router, useToast]);

  return (
    <Suspense
      fallback={
        <div className="h-screen w-screen flex justify-center items-center">
          <Spinner size="md" color="default" />
        </div>
      }
    >
      {isLoading ? (
        <div className="h-screen w-screen flex justify-center items-center">
          <Spinner size="md" color="default" />
        </div>
      ) : (
        children
      )}
    </Suspense>
  );
}
