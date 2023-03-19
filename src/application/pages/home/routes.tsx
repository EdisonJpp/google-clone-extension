import { RouteObject } from "react-router-dom";
import HomeScreen from "./Home";

// nested routes
const homeRoutes: RouteObject = {
  path: "/",
  element: <HomeScreen />,
};

export default homeRoutes;
