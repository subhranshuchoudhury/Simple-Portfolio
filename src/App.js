import "./App.css";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import AboutMe from "./components/AboutMe";
import MyAchievement from "./components/MyAchievement";
function App() {
  return (
    <>
      <div className="mainContainer">
        <Header />
        <Welcome />
        <AboutMe />
        <MyAchievement />
      </div>
    </>
  );
}

export default App;
