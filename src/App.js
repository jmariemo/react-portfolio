import React, { useState } from "react";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Header from "./components/Header";
// import Footer from "./components/Footer";

function App() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="bg-cityscape">
      <Header
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      {renderPage()}
      {/* <Footer /> */}
    </div>
  );
}

export default App;