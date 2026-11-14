import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { getRouter } from "./router";
import "./styles.css";

if (typeof window !== "undefined" && (!window.location.hash || window.location.hash === "#")) {
  window.history.replaceState(null, "", "#/");
}

class RootErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { error: Error | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error: Error) {
    return { error };
  }
  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: 24, fontFamily: "sans-serif", color: "#991b1b", background: "#fef2f2" }}>
          <h2>Runtime Error:</h2>
          <pre style={{ whiteSpace: "pre-wrap" }}>{this.state.error.stack || this.state.error.message}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

const container = document.getElementById("root");
if (container) {
  createRoot(container).render(
    <RootErrorBoundary>
      <RouterProvider router={getRouter()} />
    </RootErrorBoundary>
  );
}
