import FirstComponent  from "./FirstComponent";
import  {FifthComponent}  from "./FirstComponent";
import FourthComponent from "./FourthComponent";
import SecondComponent from "./SeconComponent";
import ThirdComponent from "./ThirdComponent";

export default function LearningComponent() {
  return (
    <div className="App">
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
      <ThirdComponent></ThirdComponent>
      <FourthComponent></FourthComponent>
      <FifthComponent></FifthComponent>
    </div>
  
  );
}