import './App.css';
import Sidenav from "./component/Sidenav";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Product from "./pages/Product";

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path="/" exact element={<Dashboard />}></Route>
              <Route path="/product" exact element={<Product />}></Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
