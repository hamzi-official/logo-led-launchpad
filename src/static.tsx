import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { getRouter } from "./router";
import "./styles.css";
const container = document.getElementById("root");
if (container) createRoot(container).render(<RouterProvider router={getRouter()} />);