"use client"

import BrowserHomePage from "@/app/components/home/BrowserHomePage"
import MobileHomePage from "@/app/components/home/MobileHomePage"
import { isMobile } from "react-device-detect"

const HomePage = () => {
	return isMobile ? <MobileHomePage /> : <BrowserHomePage />
}
export default HomePage
