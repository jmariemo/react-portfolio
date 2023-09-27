import React from "react";

function Navbar({ handlePageChange }) {
  return (
    <div className="flex flex-col md:flex-row">
      <nav className="md:mr-auto ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
        <a
          href="#portfolio"
          className="mr-5 hover:text-white"
          onClick={() => handlePageChange("Portfolio")}
        >
          portfolio
        </a>
        <a
          href="https://github.com/jmariemo"
          className="mr-5 hover:text-white"
          target="blank"
        >
          github
        </a>
        <a
          href="https://www.linkedin.com/in/jennifer-rosado-1b260b219/"
          className="mr-5 hover:text-white"
          target="blank"
        >
          linkedin
        </a>{" "}
        <a
          href="https://docs.google.com/document/d/e/2PACX-1vQrxmZzkXQ9LWSCvLS-7jWUZekikTr0uXL7rJd9Zu8VzQ8rP4SH9HHFf5t-0szu_o-bGsxsv9LMDAod/pub"
          className="mr-5 hover:text-white"
          target="blank"
        >
          resume
        </a>
      </nav>
      <a
        href="#contact"
        className="inline-flex justify-center bg-teal-800 text-white hover:text-teal-800 border-0 py-1 px-3 focus:outline-none hover:bg-white rounded text-base mt-4 md:mt-0 shadow-lg"
        onClick={() => handlePageChange("Contact")}
      >
        work with me
      </a>
    </div>
  );
}

export default Navbar;
