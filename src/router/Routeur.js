import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import ViewCrew from "../pages/viewCrew";
import NoMatch from "./NoMatch";


const Routeur = () => {
  return (
    <BrowserRouter>

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/viewCrew" element={<ViewCrew />} />
          <Route path="*" element={<NoMatch />} />     
        </Routes>
    
    </BrowserRouter>
  );
};

export default Routeur;
