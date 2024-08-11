// Import useState from react and Outlet from react-router-dom.
import { useState } from "react";
import { Outlet } from "react-router-dom";
// Import App.css.
import "./App.css";
// Import Header and Footer components.
import Header from "./components/Header";
import Footer from "./components/Footer";
// Export the function App to the main.jsx file for rendering.
export default function App() {
  // Declare a variable currentPage and a function setCurrentPage with the useState hook.
  const [currentPage, setCurrentPage] = useState("About");
  // Return the JSX for the App component.
  return (
    <div id="app">
      <Header currentPage={currentPage} handlePageChange={setCurrentPage} />
      <main className="mx-3">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
