import "./App.css";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import AboutMe from "./components/AboutMe";
import MyAchievement from "./components/MyAchievement";
import Socials from "./components/Socials";
import MyProjects from "./components/MyProjects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <div className="mainContainer">
        <Header />
        <Welcome />
        <AboutMe />
        <MyAchievement />
        <MyProjects />
        <Socials />
        <ContactMe />
        <Footer />
      </div>
    </>
  );
}

export default App;
