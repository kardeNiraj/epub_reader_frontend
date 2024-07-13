import { AiOutlineRead } from "react-icons/ai"
import { FaGlobe, FaLock, FaMobileAlt, FaSync, FaUpload } from "react-icons/fa"

const Home = () => {
	const features = [
		{
			icon: (
				<FaGlobe className='mr-2 text-lg transform group-hover:scale-110' />
			),
			title: "Platform Independence",
			description:
				"Whether you're on a desktop, laptop, tablet, or smartphone, Pocket Book offers a consistent and intuitive reading experience. Simply open your web browser, log in, and continue reading right where you left off.",
		},
		{
			icon: <FaLock className='mr-2 text-lg transform group-hover:scale-110' />,
			title: "Robust Security",
			description:
				"Pocket Book prioritizes your privacy and security. With advanced encryption protocols, your data and books are kept safe from unauthorized access. Enjoy peace of mind knowing your reading material is secure.",
		},
		{
			icon: (
				<FaUpload className='mr-2 text-lg transform group-hover:scale-110' />
			),
			title: "Easy Uploads",
			description:
				"Upload your own eBooks in various formats with ease. Pocket Book supports a wide range of file types, ensuring you can add your personal collection without any hassle. Simply drag and drop your files or select them from your device.",
		},
		{
			icon: (
				<AiOutlineRead className='mr-2 text-lg transform group-hover:scale-110' />
			),
			title: "Anywhere Access",
			description:
				"Read your books anywhere, anytime. Pocket Book syncs your progress across all devices, allowing you to pick up right where you left off. Whether you're at home, commuting, or on vacation, your library is always at your fingertips.",
		},
		{
			icon: (
				<FaMobileAlt className='mr-2 text-lg transform group-hover:scale-110' />
			),
			title: "User-Friendly Interface",
			description:
				"Enjoy a clean, intuitive interface that makes reading a pleasure. Customize your reading experience with adjustable font sizes, themes, and more to suit your preferences.",
		},
		{
			icon: <FaSync className='mr-2 text-lg transform group-hover:scale-110' />,
			title: "Cross-Device Sync",
			description:
				"Sync your reading progress, bookmarks, and notes across all your devices. Start reading on your phone during your commute and continue on your tablet at home without missing a page.",
		},
	]

	return (
		<div className='max-w-7xl mx-auto px-4 py-8 min-h-screen flex flex-col justify-center items-center'>
			<h1 className='text-3xl font-bold text-center text-foreground mb-12'>
				Pocket Book: Your Ultimate Platform-Independent eBook Reader
			</h1>

			<p className='text-center text-muted-foreground mb-12'>
				Pocket Book is a versatile, platform-independent eBook reader designed
				to provide a seamless reading experience across all your devices. As a
				web app, Pocket Book ensures that you can access your favorite books
				anytime, anywhere, without being tied to a specific operating system or
				device.
			</p>

			<h2 className='text-2xl font-bold text-center text-foreground mb-8'>
				Key Features
			</h2>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
				{features.map((feature, index) => (
					<div key={index} className='group'>
						<h3 className='text-xl font-semibold mb-3 flex items-center text-foreground transition-colors duration-400'>
							{feature.icon} {feature.title}
						</h3>
						<p className='text-foreground/75 transition-colors'>
							{feature.description}
						</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default Home
