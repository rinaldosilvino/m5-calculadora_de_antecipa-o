import { useState } from "react";
import Offline from "./pages/OfflinePage";
import Simulation from "./pages/SimulationPage";
import { Global } from "./style/global";

function App() {
  const [isOnline, setIsonline] = useState(true);

  window.addEventListener("online", () => {
    setIsonline(true);
  });

  window.addEventListener("offline", () => {
    setIsonline(false);
  });

  return (
    <Global>
      {isOnline ? <Simulation></Simulation> : <Offline></Offline>}
    </Global>
  );
}

export default App;
