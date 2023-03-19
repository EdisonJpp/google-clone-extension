import { createHashRouter } from "react-router-dom";
import homeRoutes from "@/application/pages/home/routes";
import searchRoutes from "@/application/pages/search/routes";

// if you want to pass an object or array to solve nested routes
const appRouter = [homeRoutes, searchRoutes].flat();

// create hash router
const appHashRouter = createHashRouter(appRouter);

export default appHashRouter;
