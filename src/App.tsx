import { BrowserRouter } from "react-router-dom";
import Router from "./shared/router";
import NavBar from "./components/navbar/navbar";

const App = () => {
  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <Router />
    </BrowserRouter>
  );
};

export default App;
