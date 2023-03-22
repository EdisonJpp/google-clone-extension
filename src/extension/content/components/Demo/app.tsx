import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    // eslint-disable-next-line
    console.log("content view loaded");
  }, []);

  return <div className="content-view">content view</div>;
}
