import SelectCategory from "./select";
import SwitchVisualization from "./switch";

function Selectors({ setCategory, setVisualization }: any) {
  return (
    <>
      <section className="flex flex-row justify-start items-center gap-2 py-4">
        <SelectCategory setCategory={setCategory}></SelectCategory>
        <SwitchVisualization
          setVisualization={setVisualization}
        ></SwitchVisualization>
      </section>
    </>
  );
}

export default Selectors;
