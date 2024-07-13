import GlobalNav from "../components/GlobalNav"

const GlobalLayout = ({ children }) => {
	return (
		<>
			<GlobalNav />
			{children}
		</>
	)
}
export default GlobalLayout
