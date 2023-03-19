import "./index.css";
import { RouterProvider } from "react-router-dom";
import appRouter from "@/application/router";

const Application = () => {
  return <RouterProvider router={appRouter} />;
};

export { Application };
