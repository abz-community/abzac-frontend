import { FooterMenu } from "@/components/common/FooterMenu";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
	component: () => (
		<>
			<div className="h-[calc(100svh-75px)]">
				<Outlet />
			</div>
			<FooterMenu />
			<TanStackRouterDevtools />
		</>
	),
});
