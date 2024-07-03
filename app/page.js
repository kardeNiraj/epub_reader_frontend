import { Button } from "@nextui-org/react"
import Link from "next/link"

export default function Home() {
	return (
		<div className='w-screen h-screen flex flex-col gap-5 justify-center items-center'>
			<Link href={`/login`}>
				<Button>Go to Login page</Button>
			</Link>
			<Link href={`/signup`}>
				<Button>Go to Signup page</Button>
			</Link>
		</div>
	)
}
