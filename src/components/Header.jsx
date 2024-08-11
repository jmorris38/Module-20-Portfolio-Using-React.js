// Import the NavTabs component from the NavTabs.jsx file.
import NavTabs from "../components/UI/NavTabs";
// Export the Header component to the router in main.jsx.
export default function Header({ currentPage, handlePageChange }) {
  return (
    <header className="px-3 py-2 header-custom-background text-white d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
      <h1 className="nameDisplay px-2">Justin Morris</h1>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
    </header>
  );
}