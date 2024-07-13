import {
	Button,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
} from "@nextui-org/react"
import { Image } from "antd"

export default function GlobalNav() {
	return (
		<Navbar shouldHideOnScroll className='absolute top-0 left-0 w-full'>
			<NavbarBrand>
				<Image
					width={60}
					src={`/logo.png`}
					placeholder={
						<Image preview={false} src='/logo-compressed.png' width={60} />
					}
				/>
			</NavbarBrand>
			<NavbarContent className='hidden sm:flex gap-4' justify='center'>
				<NavbarItem onClick={() => router.push("/home")}>Home</NavbarItem>
				<NavbarItem onClick={() => router.push("/about-us")}>About</NavbarItem>
				<NavbarItem onClick={() => router.push("/")}>Integrations</NavbarItem>
			</NavbarContent>
			<NavbarContent justify='end'>
				<NavbarItem className='hidden lg:flex'></NavbarItem>
				<NavbarItem>
					<Button color='primary' href='#' variant='flat'>
						Sign Up
					</Button>
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	)
}
