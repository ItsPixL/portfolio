import React from "react";
import "./App.css";
import Header from "./components/Header.jsx";

function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  React.useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.style.setProperty("--clr-black", "#000000");
      root.style.setProperty("--clr-white", "#ffffff");
      root.style.setProperty("--clr-grey", "#181818");
    } else {
      root.style.setProperty("--clr-black", "#ffffff");
      root.style.setProperty("--clr-white", "#000000");
      root.style.setProperty("--clr-grey", "#B7B7B7");
    }
  }, [isDarkMode]);

  return (
    <>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    </>
  );
}

export default App;
