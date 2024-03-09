import { children } from "react";
import "../styles/globals.css";
import Provider from "../components/Provider";
import Nav from "../components/Nav";

export const metadata = {
  title: "Promtopia",
  description: "Discover &  Share AI Prompts",
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <Nav />
          {/* <Provider /> */}
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
