import { useCallback, useState } from 'react';
import './App.css';
import UIScreen from './components/UIScreen';

function App() {
  const [page, setPage] = useState("homeMenu");

  const navigator = useCallback((page) => {
    switch (page) {
      case "homeMenu":
        return <UIScreen onPlayRequest={() => { setPage("ingame"); }} onQuitRequest={() => { setPage("exitScreen") }} onSettingsRequest={() => { setPage("settings") }} />

      case "ingame":
        return "PLAYSURFACE"

      case "settings":
        return "Settings"

      case "exitScreen":
        return "Thanks for playing"

      default:
        return null
    }
  }, [setPage])
  return (
    <>
      {navigator(page)}
    </>
  );
}

export default App;
