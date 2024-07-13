import {
	Avatar,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	User,
} from "@nextui-org/react"
import { Image } from "antd"
import { LogOut } from "lucide-react"
import { useRouter } from "next/navigation"

export default function UserNav() {
	const router = useRouter()
	return (
		<Navbar shouldHideOnScroll className='absolute top-0 left-0 w-full'>
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
				<NavbarItem
					onClick={() => router.push("/activity")}
					className={`${linkColor("activity")} cursor-pointer`}>
					Activity
				</NavbarItem>
				<NavbarItem
					onClick={() => router.push("/library")}
					className={`${linkColor("library")} cursor-pointer`}>
					Library
				</NavbarItem>
				<NavbarItem
					onClick={() => router.push("/integration")}
					className={`${linkColor("integration")} cursor-pointer`}>
					Integrations
				</NavbarItem>
			</NavbarContent>
			<NavbarContent justify='end'>
				<NavbarItem className='hidden lg:flex'>
					<Dropdown shouldBlockScroll showArrow>
						<DropdownTrigger>
							<Avatar name='Junior' className='cursor-pointer' />
						</DropdownTrigger>
						<DropdownMenu aria-label='Static Actions'>
							<DropdownItem key='profile' textValue='profile' showDivider>
								<User
									onClick={() => router.push("/profile")}
									name='Junior Garcia'
									description='@jrgarciadev'
									classNames={{
										name: "text-default-600",
										description: "text-default-500",
									}}
									avatarProps={{
										size: "sm",
										src: "https://avatars.githubusercontent.com/u/30373425?v=4",
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
								endContent={<LogOut className='h-4 w-4' />}>
								Log Out
							</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</NavbarItem>
			</NavbarContent>
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
