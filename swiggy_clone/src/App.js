import "./App.css";
import { Header } from "./Components/Header/Header";
import FirstSection from "./Components/Section1/FirstSection";
import SecondSetion from "./Components/Section2/SecondSetion";
import ThirdSection from "./Components/Section3/ThirdSection";
import FourthSection from "./Components/Section4/FourthSection";

function App() {
  return (
    <div className="App">
      <FirstSection />
      <SecondSetion />
      <ThirdSection />
      <FourthSection />
    </div>
  );
}

export default App;
