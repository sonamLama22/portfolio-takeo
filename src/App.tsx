import { BrowserRouter } from "react-router-dom";
import Router from "./types/router";
import NavBar from "./components/navbar/navbar";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Router />
    </BrowserRouter>
  );
};

export default App;
