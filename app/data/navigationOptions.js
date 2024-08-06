import { FaHome } from "react-icons/fa"
import { MdLibraryAdd, MdSettings } from "react-icons/md"

export const navigationOptions = [
	{
		icon: <FaHome className='w-5 h-5' />,
		title: "Activity",
		path: "/home",
	},
	{
		icon: <MdLibraryAdd className='w-5 h-5' />,
		title: "Library",
		path: "/library",
	},
	{
		icon: <MdSettings className='w-5 h-5' />,
		title: "Settings",
		path: "/settings",
	},
]
