import { SolidForm } from "./SolidForm";

function App() {
  return (
    <div className="flex flex-col w-full  items-center p-10 gap-4">
      <div className="flex gap-4 items-center border-4 border-yellow-300 p-8 rounded-xl shadow-xl">
        <img src="/blue-carrot.png" alt="carrot" className="size-10" />
        <h1 className="text-3xl font-bold text-blue-700">Blue Carrot</h1>
      </div>
      <SolidForm />
    </div>
  );
}

export default App;
