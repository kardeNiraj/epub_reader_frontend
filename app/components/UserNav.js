import store from "@/utils/cookie"
import {
	Avatar,
	Button,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	useDisclosure,
	User,
} from "@nextui-org/react"
import { Drawer, Image, List } from "antd"
import { LogOut } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useContext } from "react"
import { isMobile } from "react-device-detect"
import { FaHome } from "react-icons/fa"
import {
	MdLogout,
	MdOutlineLibraryAdd,
	MdOutlineSettings,
} from "react-icons/md"
import { RxHamburgerMenu } from "react-icons/rx"
import { UserContext } from "../(user)/layout"
import { navigationOptions } from "../data/navigationOptions"

export default function UserNav() {
	const router = useRouter()
	const { user } = useContext(UserContext)
	// const [isMenuOpen, setIsMenuOpen] = useState(false)
	const { isOpen, onOpenChange, onOpen } = useDisclosure()

	const handleLogout = () => {
		store.remove("ebookUserToken")
		router.push("/login")
	}

	const menuItems = [
		{
			title: "Activity",
			icon: <FaHome className='w-5 h-5' />,
			path: "/home",
		},
		{
			title: "Library",
			icon: <MdOutlineLibraryAdd className='w-5 h-5' />,
			path: "/library",
		},
		{
			title: "Settings",
			icon: <MdOutlineSettings className='w-5 h-5' />,
			path: "/profile",
		},
	]

	return (
		<Navbar className='fixed top-0 left-0 w-full py-2'>
			<NavbarBrand>
				<Image
					onClick={() => router.push("/home")}
					preview={false}
					width={60}
					src={`/logo.png`}
					placeholder={
						<Image preview={false} src='/logo-compressed.png' width={60} />
					}
					className='cursor-pointer'
				/>
			</NavbarBrand>
			<NavbarContent className='hidden sm:flex gap-4' justify='center'>
				{navigationOptions.map((nav) => (
					<NavbarItem
						onClick={() => router.push(nav?.path)}
						className={`${linkColor(nav?.path)} cursor-pointer`}>
						{nav?.title}
					</NavbarItem>
				))}
			</NavbarContent>
			<NavbarContent justify='end'>
				{isMobile && (
					<>
						<RxHamburgerMenu onClick={onOpen} className='h-5 w-5' />
						<Drawer
							closable
							destroyOnClose
							title={
								<User
									onClick={() => router.push("/profile")}
									name={user?.name}
									description={user?.email}
									classNames={{
										name: "text-default-600",
										description: "text-default-500",
									}}
									avatarProps={{
										size: "sm",
										src: user?.profileImage,
									}}
								/>
							}
							placement='right'
							open={isOpen}
							onClose={onOpenChange}>
							<div className='flex flex-col h-full justify-between'>
								<List
									itemLayout='vertical'
									dataSource={navigationOptions}
									renderItem={(item) => (
										<List.Item>
											<div className='flex gap-3 items-center'>
												{item?.icon}
												{item?.title}
											</div>
										</List.Item>
									)}
								/>
								<div>
									<Button
										color='danger'
										className='w-full flex gap-2 items-center'
										onClick={handleLogout}>
										<MdLogout />
										Logout
									</Button>
								</div>
							</div>
						</Drawer>
					</>
				)}
				<NavbarItem className='hidden lg:flex'>
					<Dropdown shouldBlockScroll showArrow>
						<DropdownTrigger>
							<Avatar
								src={user?.profileImage}
								name={user?.name}
								className='cursor-pointer'
							/>
						</DropdownTrigger>
						<DropdownMenu aria-label='Static Actions'>
							<DropdownItem key='profile' textValue='profile' showDivider>
								<User
									onClick={() => router.push("/profile")}
									name={user?.name}
									description={user?.email}
									classNames={{
										name: "text-default-600 capitalize",
										description: "text-default-500",
									}}
									avatarProps={{
										size: "sm",
										src: user?.profileImage,
									}}
								/>
							</DropdownItem>
							<DropdownItem key='copy' textValue='Copy link'>
								Copy link
							</DropdownItem>
							<DropdownItem key='edit' textValue='Edit link'>
								Edit file
							</DropdownItem>
							<DropdownItem
								key='logout'
								className='text-danger'
								color='danger'
								textValue='Log Out'
								endContent={<LogOut className='h-4 w-4' />}
								onClick={handleLogout}>
								Log Out
							</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</NavbarItem>
			</NavbarContent>
			<NavbarMenu>
				{menuItems.map((item, index) => (
					<NavbarMenuItem key={`${item}-${index}`}>
						<Link
							color={
								index === 2
									? "primary"
									: index === menuItems.length - 1
									? "danger"
									: "foreground"
							}
							className='w-full'
							href='#'
							size='lg'>
							{item}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	)
}

function linkColor(linkText) {
	const pathname = window.location.pathname.slice(1)
	if (pathname === linkText) {
		return "text-primary"
	}

	return "text-foreground"
}
