import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function NavLink({ href, label, isMobile }) {
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		if (
			window.location.pathname === href ||
			(href !== "/" && window.location.pathname.startsWith(href))
		) {
			setIsActive(true);
		}
	}, [href]);

	return isMobile ? (
		<li
			id="mobileNavLink"
			className={cn(
				"py-3 border-b border-b-(--border) transition-colors duration-500 ease-in last:border-b-0",
				isActive ? "text-(--activeLink) text-18-semi" : "text-(--text-color)"
			)}
		>
			<a href={href}>{label}</a>
		</li>
	) : (
		<a
			href={href}
			className={
				isActive
					? "underline decoration-blue-500 decoration-3"
					: "hover:underline hover:decoration-3 hover:decoration-blue-500"
			}
		>
			{label}
		</a>
	);
}
