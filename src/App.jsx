import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"; // Adjust path if different
import Topbar from "./components/Topbar/TopBar";
import Footer from "./components/Footer/Footer" // Adjust path if different
import Home from "./pages/Home/Home";
import Programs from "./pages/Home/Programs/Programs";
import AboutACNYS from "./pages/About/AboutACNYS/AboutACNYS";
import VisionMission from "./pages/About/VisionMission/VisionMission";
import Message from "./pages/About/Message/Message";

import Work from "./pages/Academics/Workshop/Workshop";
import Activities from "./pages/Academics/Activities/Activities";
import Achievement from "./pages/Academics/Achievement/Achievement"
import Placement from "./pages/Academics/Placement/placement";
import Anandamaya from "./pages/Anandamaya/Anandamaya";
import Contact from "./pages/Contact/Contact";
import ACNYS from "./pages/ACNYS/ACNYS";
import UG from "./pages/Department/UG/UG";
import PG from "./pages/Department/PG";
import Anatomy from "./pages/Department/UG/Anatomy/Anatomy";
import Physiology from "./pages/Department/UG/Physiology/physiology";
import Pathology from "./pages/Department/UG/Pathology";
import Manipulative from "./pages/Department/UG/Manipulative";
import YogaResearch from "./pages/Department/UG/YogaResearch";
import Acupuncture from "./pages/Department/UG/Acupuncture/Acupunture";
import FastingNutrition from "./pages/Department/UG/FastingNutrition";
import DiagnosisGynecology from "./pages/Department/UG/DiagnosisGynecology/DiagnosisGynecology";
import Hydrotherapy from "./pages/Department/UG/Hydrotherapy";
import ClinicalNaturopathy from "./pages/Department/UG/ClinicalNaturopathy/Clinical";
import Psychology from "./pages/Department/UG/Psychology";
import Forensic from "./pages/Department/UG/Forensic/Forensic";
import Community from "./pages/Department/UG/Community/Community";
import Sa from "./pages/Department/Master"


const App = () => {
  return (
    <Router>
      <Topbar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about/acnys" element={<AboutACNYS />} />
        <Route path="about/vision-mission" element={<VisionMission />} />
        <Route path="about/messages" element={<Message />} />
        <Route path="academics/activities" element={<Activities />} />
        <Route path="academics/work" element={<Work />} />
        <Route path="academics/achieve" element={<Achievement />} />
        <Route path="academics/placement" element={<Placement />} />
        <Route path="anandamaya" element={<Anandamaya />} />
        <Route path="acnys" element={<ACNYS />} />
        <Route path="contact" element={<Contact />} />
        <Route path="programs" element={<Programs />} />
        <Route path="department/ug" element={<UG />} />
        <Route path="department/pg" element={<PG />} />
        <Route path="department/ug/anatomy" element={<Anatomy />} />
        <Route path="department/ug/physiology" element={<Physiology />} />
        <Route path="department/ug/pathology" element={<Pathology />} />
        <Route path="department/ug/manipulative-therapies" element={<Manipulative />} />
        <Route path="department/ug/yoga-research" element={<YogaResearch />} />
        <Route path="department/ug/acupuncture" element={<Acupuncture />} />
        <Route path="department/ug/fasting-nutrition" element={<FastingNutrition />} />
        <Route path="department/ug/modern-diagnosis" element={<DiagnosisGynecology />} />
        <Route path="department/ug/hydrotherapy" element={<Hydrotherapy />} />
        <Route path="department/ug/clinical-naturopathy" element={<ClinicalNaturopathy />} />
        <Route path="department/ug/psychology" element={<Psychology />} />
        <Route path="department/ug/forensic-medicine" element={<Forensic />} />
        <Route path="department/ug/community" element={<Community />} />
        <Route path="department/master" element={<Sa />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
