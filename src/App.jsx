import { useEffect, useState } from "react";
import SignUp from "./pages/Signup";
import Theme from "./contexts/Theme";

function App() {
  const [
    isDarkThemeEnabled,
    setIsDarkThemeEnabled
  ] = useState(true);

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


  return (
    <Theme.Provider value={{ isDarkThemeEnabled, setIsDarkThemeEnabled }}>
      <SignUp />
    </Theme.Provider>
  );
}

export default App;
