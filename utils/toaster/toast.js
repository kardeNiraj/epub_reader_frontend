// components/CustomToast.js
import {
	MdCheckCircle,
	MdClose,
	MdError,
	MdInfo,
	MdWarning,
} from "react-icons/md"

const iconTypes = {
	success: <MdCheckCircle className='text-green-500' size={24} />,
	info: <MdInfo className='text-blue-500' size={24} />,
	warning: <MdWarning className='text-yellow-500' size={24} />,
	error: <MdError className='text-red-500' size={24} />,
}

const CustomToast = ({ type = "info", heading, description, closeToast }) => {
	const IconComponent = iconTypes[type] || iconTypes.info

	return (
		<div
			className={`flex flex-col w-full max-w-md mx-auto rounded-lg shadow-md bg-white border-l-4 ${
				type === "success"
					? "border-green-500"
					: type === "warning"
					? "border-yellow-500"
					: type === "error"
					? "border-red-500"
					: "border-blue-500"
			}`}>
			<div className='flex items-center justify-between p-4'>
				<div className='flex items-center'>
					<div className='mr-2'>{IconComponent}</div>
					<div className='flex-1 min-w-0'>
						<p
							className={`text-sm font-semibold truncate ${
								type === "success"
									? "text-green-800"
									: type === "warning"
									? "text-yellow-800"
									: type === "error"
									? "text-red-800"
									: "text-blue-800"
							}`}>
							{heading}
						</p>
						<hr className='border-gray-300 my-1' />
						<p className='text-xs text-gray-700 mt-1'>{description}</p>
					</div>
				</div>
				<button
					onClick={closeToast}
					className='ml-4 flex-shrink-0 p-1 rounded-full hover:bg-gray-100 transition-colors duration-150'
					aria-label='Close'>
					<MdClose className='text-gray-600 hover:text-gray-800' size={20} />
				</button>
			</div>
		</div>
	)
}

export default CustomToast
