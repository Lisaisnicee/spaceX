import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../pages/Main';
import ViewCrew from '../pages/viewCrew';
import MemberDetails from '../pages/MemberDetails';
import ViewArticle from '../pages/ViewArticle';
import About from '../pages/About';
import NoMatch from './NoMatch';
import ViewRockets from '../pages/rockets';
import ViewRocketsDetail from '../pages/rocketsDetail';
import ViewRoadster from '../pages/ViewRoadster';
import ViewLastlaunch from '../pages/ViewLastlaunch';
import Navigation from '../layout/navigation';
import Quiz from '../pages/Quiz';
import Quiz1 from '../pages/Quiz1';
import Quiz2 from '../pages/Quiz2';
import Quiz3 from '../pages/Quiz3';
import Quiz4 from '../pages/Quiz4';

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
          <Route path="/rockets" element={<ViewRockets />} />
          <Route path="/rockets/:id" element={<ViewRocketsDetail />} />
          <Route path="/roadster" element={<ViewRoadster />} />
          <Route path="/lastlaunch" element={<ViewLastlaunch />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/quiz/1" element={<Quiz1 />} />
          <Route path="/quiz/2" element={<Quiz2 />} />
          <Route path="/quiz/3" element={<Quiz3 />} />
          <Route path="/quiz/4" element={<Quiz4 />} />
          <Route path="/rockets/*" element={<NoMatch />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Navigation>
    </BrowserRouter>
  );
};

export default Routeur;
