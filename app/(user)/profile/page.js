import { Spinner } from "@nextui-org/react"
import { Suspense } from "react"

const ProfilePage = () => {
	return (
		<Suspense fallback={<Spinner size='md' color='default' />}>
			<div className='w-screen h-screen flex justify-center items-center'>
				ProfilePage reached
			</div>
		</Suspense>
	)
}
export default ProfilePage
