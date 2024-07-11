"use client"

import apiClient from "@/Services/apiClient"
import localStore from "@/utils/cookie"
import useToast from "@/utils/toaster/useToast"
import { useRouter } from "next/navigation"

export default function AuthLayout({ children }) {
	const router = useRouter()

	// check if a user is present in the localStorage of browser... i.e if a user is loggedIn
	const token = localStore.getItem("userToken")
	const { showToast } = useToast()

	if (token) {
		try {
			// made a status call to backend for checking if the user has a live session based on the token
			const response = apiClient.get("/api/user/status", {
				headers: {
					Authorization: token,
				},
			})

			// if session is not active then redirect to login page.
			if (!response?.data?.data?.isSessionActive) {
				showToast(
					"error",
					"Error",
					error?.message ||
						error?.response?.data?.message ||
						"Please login to continue!"
				)
				router.push("/login")
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
	return <div>{children}</div>
}
