import { useRouter } from "next/navigation"
import { navigationOptions } from "../data/navigationOptions"

const MobileNav = () => {
	const router = useRouter()

	return (
		<div
			className={`fixed bottom-0 inset-x-0 bg-background shadow-lg border-t z-50 h-16 flex justify-around`}>
			{navigationOptions.map((nav) => (
				<div
					className='flex flex-col gap-px items-center justify-center'
					onClick={() => router.push(nav?.path)}>
					{nav?.icon}
					{nav?.title}
				</div>
			))}
		</div>
	)
}
export default MobileNav
