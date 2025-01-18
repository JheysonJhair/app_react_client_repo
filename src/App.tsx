import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./hook/ProtectedRoute ";

import Home from "./pages/Home";
import StudentLayout from "./layouts/StudentLayout";
import { HomeStudent } from "./pages/HomeStudent";
import { TeacherDetail } from "./modules/Teacher/pages/TeacherDetail";
import { ScientificArticle } from "./modules/scientific-article/pages/ScientificArticle";
import { ScientificArticleDetail } from "./modules/scientific-article/pages/ScientificArticleDetail";
import { ResearchProject } from "./modules/Project/pages/ResearchProject";
import { ResearchProjectDetail } from "./modules/Project/pages/ResearchProjectDetail";
import { Contact } from "./modules/contact/pages/Contact";

import TeacherLayout from "./layouts/TeacherLayout";
import TeacherLogin from "./pages/auth/TeacherLogin";
import HomeTeacher from "./pages/HomeTeacher";
import TeacherProfile from "./architecture/Teacher/TeacherProfile";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/student" element={<StudentLayout />}>
        <Route index element={<HomeStudent />} />
       <Route path="teacher/:id" element={<TeacherDetail />} />
        <Route path="scientific-article" element={<ScientificArticle />} />
        <Route path="scientific-article/:id" element={<ScientificArticleDetail />}/>
        <Route path="research-project" element={<ResearchProject />} />
        <Route path="research-project/:id" element={<ResearchProjectDetail />}/>
        <Route path="contact" element={<Contact />} />
      </Route>

      <Route path="/teacher/login" element={<TeacherLogin />} />

      <Route path="/teacher" element={<ProtectedRoute />}>
          <Route element={<TeacherLayout />}>
            <Route index element={<HomeTeacher />} />
            <Route path="profile" element={<TeacherProfile />} />
          </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
