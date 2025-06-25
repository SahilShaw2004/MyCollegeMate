import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home.jsx";
import Start from "./pages/Start.jsx";
import Clubs from "./pages/Clubs.jsx";
import Events from "./pages/Events.jsx";
import FacultyLogin from "./pages/FacultyLogin.jsx";
import FacultySignup from "./pages/FacultySignup.jsx";
import Gallery from "./pages/Gallery.jsx";
import Leaderboard from "./pages/leaderboard.jsx";
import LostandFound from "./pages/LostandFound.jsx";
import MemePage from "./pages/MemePage.jsx";
import Ragging from "./pages/Ragging.jsx";
import { RaggingHistoryPage } from "./pages/Ragging.jsx";
import StudentLogin from "./pages/StudentLogin.jsx";
import StudentSignup from "./pages/StudentSignup.jsx";
import StudyMaterial from "./pages/StudyMaterial.jsx";
import StudyPartner from "./pages/StudyPartner.jsx";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/start" element={<Start />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/clubs/join" element={<Clubs />} />
        <Route path="/clubs/events" element={<Clubs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/registrations" element={<Events />} />
        <Route path="/faculty-login" element={<FacultyLogin />} />
        <Route path="/faculty-signup" element={<FacultySignup />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/lostandfound" element={<LostandFound />} />
        <Route path="/memepage" element={<MemePage />} />
        <Route path="/ragging" element={<Ragging />} />
        <Route path="/ragging/history" element={<RaggingHistoryPage />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/student-signup" element={<StudentSignup />} />
        <Route path="/studymaterial" element={<StudyMaterial />} />
        <Route path="/studypartner" element={<StudyPartner />} />
        <Route path="/studypartner/groups" element={<StudyPartner />} />
        <Route path="/studypartner/join" element={<StudyPartner />} />
      </Routes>
    </MainLayout>
  );
}

export default App;