import { useEffect, useState } from "react";
import SignUp from "./pages/Signup";
import Theme from "./contexts/Theme";

function App() {
  const [
    isDarkThemeEnabled,
    setIsDarkThemeEnabled
  ] = useState(true);

  const [
    isViewportLessThan480,
    setIsViewportLessThan480
  ] = useState(window.innerWidth <= 480);


  // toggle light/dark theme.
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.altKey && (e.key === 'd' || e.key === 'D')) {
        document.documentElement.classList.toggle('dark');
        setIsDarkThemeEnabled(prevState => !prevState);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);

  }, []);

  // check for viewport size.
  useEffect(() => {
    const isViewportWidthSmall = () => {
      console.log(isViewportLessThan480);
      setIsViewportLessThan480(window.innerWidth <= 480);
    };

    window.addEventListener('resize', isViewportWidthSmall);

    return () => window.removeEventListener('resize', isViewportWidthSmall);

  }, []);



  return (
    <Theme.Provider value={{
      isDarkThemeEnabled,
      setIsDarkThemeEnabled,
      isViewportLessThan480
    }}>
      <SignUp />
    </Theme.Provider>
  );
}

export default App;
