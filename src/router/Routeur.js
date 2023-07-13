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
import ViewRoadster from "../pages/ViewRoadster";
import ViewLastlaunch from "../pages/ViewLastlaunch";
import Navigation from "../layout/navigation";




const Routeur = () => {
  return (
    <BrowserRouter>
      <Navigation>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/viewCrew" element={<ViewCrew />} />
          <Route path="/member/:id" element={<MemberDetails />} />
          <Route path="/articles" element={<ViewArticle />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/quizz" element={<Quizz />} /> */}
          <Route path="/rockets" element={<ViewRockets />} />
          <Route path="/rockets/:id" element={<ViewRocketsDetail />} />
          <Route path="/roadster" element={<ViewRoadster />} />
          <Route path="/lastlaunch" element={<ViewLastlaunch />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="*/*" element={<NoMatch />} /> 
          <Route path="/rockets/*" element={<NoMatch />} /> 

        </Routes>
        </Navigation>
    </BrowserRouter>
  );
};

export default Routeur;
