import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import ViewCrew from "../pages/viewCrew";
import MemberDetails from "../pages/MemberDetails";
import ViewArticle from "../pages/ViewArticle";
import About from "../pages/About";
import NoMatch from "./NoMatch";


const Routeur = () => {
  return (
    <BrowserRouter>

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/viewCrew" element={<ViewCrew />} />
          <Route path="/member/:id" element={<MemberDetails />} />
          <Route path="/articles" element={<ViewArticle />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NoMatch />} /> 

        </Routes>
    
    </BrowserRouter>
  );
};

export default Routeur;
