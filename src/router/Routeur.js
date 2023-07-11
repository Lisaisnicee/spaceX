import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import NoMatch from "./NoMatch";


const Routeur = () => {
  return (
    <BrowserRouter>

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<NoMatch />} />     
        </Routes>
    
    </BrowserRouter>
  );
};

export default Routeur;
