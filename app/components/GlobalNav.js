import {
	Button,
	Link,
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
				{/* <AcmeLogo /> */}
				<Image
					width={60}
					src={`/logo.png`}
					placeholder={
						<Image preview={false} src='/logo-compressed.png' width={60} />
					}
				/>
			</NavbarBrand>
			<NavbarContent className='hidden sm:flex gap-4' justify='center'>
				<NavbarItem>
					<Link color='foreground' href='#'>
						Home
					</Link>
				</NavbarItem>
				<NavbarItem isActive>
					<Link href='#' aria-current='page'>
						About
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color='foreground' href='#'>
						Integrations
					</Link>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent justify='end'>
				<NavbarItem className='hidden lg:flex'>
					<Link href='#'>Login</Link>
				</NavbarItem>
				<NavbarItem>
					<Button as={Link} color='primary' href='#' variant='flat'>
						Sign Up
					</Button>
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	)
}
