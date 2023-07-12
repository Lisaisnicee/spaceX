import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import ViewCrew from "../pages/viewCrew";
import MemberDetails from "../pages/MemberDetails";
import Rockets from "../pages/rockets";
import NoMatch from "./NoMatch";
import Navigation from '../layout/navigation';
import '../styles/css/main.css';

const Routeur = () => {
  return (
    <BrowserRouter>

      <Navigation>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/viewCrew" element={<ViewCrew />} />
          <Route path="/member/:id" element={<MemberDetails />} />
          <Route path="/rockets" element={<Rockets />} />
          <Route path="*" element={<NoMatch />} />     
        </Routes>
    
      </Navigation>
    </BrowserRouter>
  );
};

export default Routeur;
