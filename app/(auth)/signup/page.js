"use client"

import useToast from "@/utils/toaster/useToast"
import { Button, Spinner } from "@nextui-org/react"
import { useRouter } from "next/navigation"
import { Suspense } from "react"
import { useSignup } from "../Hooks"

const SignupPage = () => {
	const router = useRouter()
	const { showToast } = useToast()
	// rename the mutation function by the use of ":" (colon) to signup.
	//* try giving ","(comma) after isPending and pressing ctrl+space to see what the createNewUser returns (or provides).
	const { mutateAsync: signup, isPending } = useSignup()

	const handleSignup = async () => {
		// temp data, should get from form (FORMIK)
		const data = {
			name: "niraj karde",
			email: "niraj.private01@gmail.com",
			phone: "832947670",
			password: "123123",
		}

		// calling the mutation and passing options using the mutateAsync method
		// hover the signup function to see what we can provide and what we get in return
		await signup(data, {
			onSuccess: (data) => {
				console.log("signup success: " + JSON.stringify(data))
				showToast("success", "Success", "Account created Successfully!")
				router.push("/login")
			},
			onError: (error) => {
				console.log("error in signup: " + JSON.stringify(error))
				// logic to reset form

				showToast(
					"error",
					"Error",
					error?.response?.data?.message ||
						error?.message ||
						"Failed to create account, please try again!"
				)
			},
		})
	}

	return (
		// suspense is used in case of any delay in the loading of the page.
		// if delay occurs then Spinner component from nextUI will be shown.
		// Spinner is nothing but a loader, that indicates page loading.
		<Suspense fallback={<Spinner />}>
			<div className='w-screen h-screen flex flex-col gap-4 justify-center items-center'>
				SignupPage reached
				<Button onClick={handleSignup} isLoading={isPending}>
					Signup
				</Button>
			</div>
		</Suspense>
	)
}
export default SignupPage
