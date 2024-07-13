"use client"

import apiClient from "@/Services/apiClient"
import localStore from "@/utils/cookie"
import useToast from "@/utils/toaster/useToast"
import { Spinner } from "@nextui-org/react"
import { useRouter } from "next/navigation"
import { Suspense, useEffect, useState } from "react"
import UserNav from "../components/UserNav"

export default function AuthLayout({ children }) {
	const router = useRouter()
	const { showToast } = useToast()
	const [isLoading, setIsLoading] = useState(true)

	// used useEffect because want to check on page load
	useEffect(() => {
		const handleAuthCheck = async () => {
			try {
				const token = localStore.getItem("userToken")

				if (token) {
					// checking if the user token has active session
					const response = await apiClient.get("/api/user/status", {
						headers: {
							Authorization: token,
						},
					})

					if (!response.data.data.isSessionActive) {
						showToast(
							"error",
							"Error",
							"Login Session ended. Please login again"
						)
						// Redirect to login if session has expired
						router.push("/login")
						return
					}
				}
			} catch (error) {
				console.log("Error in UserAuth: ", error)
				const message =
					error?.message ||
					error?.response?.data?.message ||
					"Error checking session"
				showToast("error", "Error", message)
			} finally {
				setIsLoading(false)
			}
		}

		handleAuthCheck()
	}, [router, useToast])

	return (
		<Suspense fallback={<Spinner />}>
			{isLoading ? (
				<div className='h-screen w-screen flex justify-center items-center'>
					<Spinner size='md' color='default' />
				</div>
			) : (
				<>
					<UserNav />
					{children}
				</>
			)}
		</Suspense>
	)
}
