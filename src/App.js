import { createContext } from "react";
import { routes } from "./routes/index";
import { useRoutes } from "react-router";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "./firebase";

export const Context = createContext();

function App() {
  const [user, loading, error] = useAuthState(firebase.auth());
  const element = useRoutes(routes);
  return (
    <Context.Provider value={{ user, loading, error }}>
      {element}
    </Context.Provider>
  );
}

export default App;
