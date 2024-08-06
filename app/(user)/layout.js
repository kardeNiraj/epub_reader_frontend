"use client";

import apiClient from "@/Services/apiClient";
import store from "@/utils/cookie";
import useToast from "@/utils/toaster/useToast";
import { Spinner } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { createContext, Suspense, useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import MobileNav from "../components/MobileNav";
import UserNav from "../components/UserNav";

export const UserContext = createContext();

export default function AuthLayout({ children }) {
  const router = useRouter();
  const { showToast } = useToast();
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // used useEffect because want to check on page load
  useEffect(() => {
    const handleAuthCheck = async () => {
      try {
        const token = store.get("ebookUserToken");

        if (token) {
          // checking if the user token has active session
          const response = await apiClient.get("/api/user/status", {
            headers: {
              Authorization: token,
            },
          });

          if (!response.data.data.isSessionActive) {
            showToast(
              "error",
              "Error",
              "Login Session ended. Please login again"
            );
            // Redirect to login if session has expired
            router.push("/login");
            return;
          }

          // set context data to use further
          setUser(response?.data?.data?.user);
        }
      } catch (error) {
        console.log("Error in UserAuth: ", error);
        const message =
          error?.message ||
          error?.response?.data?.message ||
          "Error checking session";
        showToast("error", "Error", message);
      } finally {
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
        <UserContext.Provider value={{ user }}>
          <div className="relative">
            {isMobile && <MobileNav />}
            <UserNav />
            {children}
          </div>
        </UserContext.Provider>
      )}
    </Suspense>
  );
}
