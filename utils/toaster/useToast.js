// hooks/useToast.js
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const useToast = () => {
	const showToast = (type = "default", heading, message) => {
		switch (type) {
			case "success":
				toast.success(message)
				break
			case "error":
				toast.error(message)
				break
			case "info":
				toast.info(message)
				break
			case "warn":
				toast.warn(message)
				break
			default:
				toast(message)
				break
		}
	}

	return { showToast }
}

export default useToast
