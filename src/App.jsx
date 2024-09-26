import logo from "./logo.svg";
import "./App.css";
import { TopicQuiz } from "./Components/TopicQuiz.jsx";
import { Footer } from "./Components/Footer/Footer.jsx";
import { NewQuizPage } from "./Pages/NewQuizPage.jsx";
import { Login } from "./Components/auth/Login.jsx";
import { Register } from "./Components/auth/Register.jsx";
import { Route, Routes } from "react-router-dom";
import { Admin } from "./Components/Admin/Admin.jsx";
import { QuizForm } from "./Components/Admin/QuizForm.jsx";
import { ProfileMain } from "./Components/Profile/ProfileMain.jsx";
import { Quizes } from "./Components/QuizNew/Quizes.jsx";
import { Navbarnew } from "./Components/Navbar/Navbarnew.jsx";
import { Resultshow } from "./Pages/Resultshow.jsx";
import { ShowAllAnswers } from "./Pages/ShowAllAnswers.jsx";
import License from "./Components/Admin/License.jsx";
import Engineering from "./Components/Admin/Engineering.jsx";
import { Quiz } from "./Components/QuizNew/Quiz.jsx";

function App() {
  return (
    <div className="App ">
      <Navbarnew />
      <Routes>
        <Route path="/" element={<TopicQuiz />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/HTML" element={<NewQuizPage />} />
        <Route path="/CSS" element={<NewQuizPage />} />
        <Route path="/Javascript" element={<NewQuizPage />} />
        <Route path="/React" element={<NewQuizPage />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/Mongodb" element={<NewQuizPage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/addquiz" element={<QuizForm />} />
        <Route path="/profile" element={<ProfileMain />} />
        <Route path="/result" element={<Resultshow />} />
        <Route path="/showallanswer" element={<ShowAllAnswers />} />
        <Route path="/license" element={<License/>} />
        <Route path="/engineering" element={<Engineering/>} />
        {/* license */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
