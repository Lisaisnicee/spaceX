import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import ViewCrew from "../pages/viewCrew";
import MemberDetails from "../pages/MemberDetails";
import ViewArticle from "../pages/ViewArticle";
import Quiz from "../pages/Quiz";
import About from "../pages/About";
import NoMatch from "./NoMatch";
import ViewRockets from "../pages/rockets";
import ViewRocketsDetail from "../pages/rocketsDetail";




const Routeur = () => {
  return (
    <BrowserRouter>

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/viewCrew" element={<ViewCrew />} />
          <Route path="/member/:id" element={<MemberDetails />} />
          <Route path="/articles" element={<ViewArticle />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/quizz" element={<Quizz />} /> */}
          <Route path="/rockets" element={<ViewRockets />} />
          <Route path="/rockets/:id" element={<ViewRocketsDetail />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="*" element={<NoMatch />} /> 

        </Routes>
    
    </BrowserRouter>
  );
};

export default Routeur;
