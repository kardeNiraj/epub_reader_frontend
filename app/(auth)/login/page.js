"use client";

import store from "@/utils/cookie";
import useToast from "@/utils/toaster/useToast";
import { Button, Spinner } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { Suspense } from "react";
import { useLogin } from "../Hooks";

const LoginPage = () => {
  const router = useRouter();
  const { showToast } = useToast();
  // rename the mutation function by the use of ":" (colon) to login.
  //* try giving ","(comma) after isPending and pressing ctrl+space to see what the useLogin returns (or provides).
  const { mutateAsync: login, isPending } = useLogin();

  const handleLogin = async () => {
    // temp data, should get from form (FORMIK)
    const data = {
      eop: "saylibhagat2003@gmail.com",
      password: "123123",
    };

    // calling the mutation and passing options using the mutateAsync method
    // hover the login function to see what we can provide and what we get in return
    // !ignore the options passed to the login method, will explain later
    await login(data, {
      onSuccess: (data) => {
        console.log("success of login: " + JSON.stringify(data));
        showToast("success", "Success", "Login Successful!");
        store.set("ebookUserToken", data?.token);
        router.push("/home");
      },
      onError: (error) => {
        console.log("error in login: " + JSON.stringify(error));
        // logic to reset form

        showToast(
          "error",
          "Error",
          error?.message ||
            error?.response?.data?.message ||
            "Failed to login, please try again!"
        );
      },
    });
  };

  return (
    // suspense is used in case of any delay in the loading of the page.
    // if delay occurs then Spinner component from nextUI will be shown.
    // Spinner is nothing but a loader, that indicates page loading.
    <Suspense
      fallback={
        <div className="h-screen w-screen flex justify-center items-center">
          <Spinner size="md" color="default" />
        </div>
      }
    >
      <div className="w-screen h-screen flex flex-col gap-5 justify-center items-center">
        {/* login form goes here */}
        <p>LoginPage reached</p>

        <Button onClick={handleLogin} isLoading={isPending}>
          Login
        </Button>
      </div>
    </Suspense>
  );
};

export default LoginPage;
