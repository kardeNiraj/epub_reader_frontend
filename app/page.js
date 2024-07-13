"use client"

import { Button } from "@nextui-org/react"
import { useRouter } from "next/navigation"

export default function Home() {
	const router = useRouter()
	return (
		<div className='w-screen h-screen flex flex-col gap-5 justify-center items-center'>
			<Button onClick={() => router.push("/login")}>Go to Login page</Button>
			<Button onClick={() => router.push("/signup")}>Go to Signup page</Button>
		</div>
	)
}
