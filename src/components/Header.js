import Navbar from "./Navbar";

function Header({ currentPage, handlePageChange }) {
  return (
    <header className="bg-rosado sticky top-0 z-10 font-serif">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          href="#about"
          className="flex space-x-2 md:flex-col font-medium text-teal-950 mb-4 md:mb-0 ml-3 text-xl"
          onClick={() => handlePageChange("About")}
        >
          <p>jennifer</p>
          <p>rosado</p>
        </a>
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
    </header>
  );
}

export default Header;