"use client"

import apiClient from "@/Services/apiClient"
import localStore from "@/utils/cookie"
import { useRouter } from "next/navigation"

export default function AuthLayout({ children }) {
	const router = useRouter()

	// check if a user is present in the localStorage of browser... i.e if a user is loggedIn
	const token = localStore.getItem("userToken")

	if (token) {
		try {
			// made a status call to backend for checking if the user has a live session based on the token
			const response = apiClient.get("/api/user/status", {
				headers: {
					Authorization: token,
				},
			})

			// if session is active then redirect to home page.
			if (response?.data?.data?.isSessionActive) {
				router.push("/home")
			}
		} catch (error) {
			showToast(
				"error",
				"Error",
				error?.message ||
					error?.response?.data?.message ||
					"Error while checking session!"
			)
		}
	}

	return <>{children}</>
}
