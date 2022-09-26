import "./App.css";
import SingleSelect from "./components/SingleSelect";
import SwitchTables from "./components/SwitchTables";
import data from "./data.json";
import { useState } from "react";

const createNameArray = (data) => {
  return [...new Set(data.flatMap((company) => company.name))]
    .map((selectedOption) => {
      return {
        label: selectedOption,
        value: selectedOption,
      };
    })
    .sort((a, b) => {
      if (a.value < b.value) {
        return -1;
      }
      if (a.value > b.value) {
        return 1;
      }
      return 0;
    });
};

function App() {
  const [selectedValue, setSelectedValue] = useState(null);
  const [tableItems, setTableItems] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

  const handleSelect = (selectedItem) => {
    if (selectedItem) {
      setIsEdit(true);
      const companyName = selectedItem.value;
      setSelectedValue(companyName);
      return;
    }
    setIsEdit(false);
    setSelectedValue([]);
    return;
  };

  const options = createNameArray(data);

  return (
    <div className="App">
      <div className="container">
        <h1>Test app datatables</h1>
        {JSON.stringify(tableItems)}
        <SingleSelect
          options={options}
          value={selectedValue}
          onChange={(value) => handleSelect(value)}
        />
        <SwitchTables
          isEdit={isEdit}
          data={data}
          selectedValue={selectedValue}
          tableItems={tableItems}
          setTableItems={setTableItems}
        />
      </div>
    </div>
  );
}

export default App;
