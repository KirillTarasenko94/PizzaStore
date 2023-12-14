import Header from "./componets/Header";
import "./scss/app.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./componets/pages/Home";
import Folder from "./componets/pages/Folder";
import Cart from "./componets/pages/Cart";
import { createContext, useState } from "react";



export const SerachContext = createContext();

function App() {
  const [serch, setSearch] = useState("");

  return (
    <div className="wrapper">
      <SerachContext.Provider value={{serch, setSearch}}>
      <Header  />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home serch={serch} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Folder />} />
          </Routes>
        </div>
      </div>
      </SerachContext.Provider>
    </div>
  );
}

export default App;
