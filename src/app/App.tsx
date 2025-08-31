import { DropDown } from "../components/ui/DropDown";
import { useOptionActions } from "../hooks/useOptionAction";
import { useOptionList } from "../hooks/useOptionList";

function App() {
  // for example get options from redux or api
  const { options } = useOptionList();

  // for example add new option from api
  const { addNewOption } = useOptionActions();
  return (
    <section>
      <DropDown options={options} addNewOption={addNewOption} />
    </section>
  );
}

export default App;
