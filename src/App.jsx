import { useCallback, useState } from "react";
import PlaySurface from "./components/PlaySurface";
import UIScreen from "./components/UIScreen";
import "./App.css";
import "./generics.css";

function App() {
  const [page, setPage] = useState("homeMenu");

  const navigator = useCallback(
    (page) => {
      switch (page) {
        case "homeMenu":
          return (
            <UIScreen
              onPlayRequest={() => {
                setPage("ingame");
              }}
              onQuitRequest={() => {
                setPage("exitScreen");
              }}
              onSettingsRequest={() => {
                setPage("settings");
              }}
            />
          );

        case "ingame":
          return <PlaySurface />;

        case "settings":
          return "Settings";

        case "exitScreen":
          return "Thanks for playing";

        default:
          return null;
      }
    },
    [setPage]
  );
  return <>{navigator(page)}</>;
}

export default App;
