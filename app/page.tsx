import BottomSection from "./components/BottomSection";
import CarExamples from "./components/CarRepaired";
import Cuve from "./components/Cuve";
import Specs from "./components/Specs";
import TopSection from "./components/TopSection";
import WeSection from "./components/WeSection";


export default function Home() {
  return (
      <main className="">
      <TopSection/>
      
      <Cuve/>
      <Specs/>
      <CarExamples/>
      <WeSection/>
      <BottomSection/>
      </main>
      
  );
}
