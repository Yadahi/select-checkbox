import { useEffect, useRef } from "react";
import Datatable from "./Datatable";

const table = document.querySelector("#js-editable");

function EditableTable({ data, tableItems, setTableItems, isEditable }) {
  const savedHandleSelectCheckbox = useRef();

  const handleSelectCheckbox = (event) => {
    const id = event.target.dataset.checkboxId;
    console.log("handle select");
    console.log("id", id);

    setTableItems((items) => {
      console.log("set table items", items);
      if (items.includes(id)) {
        return items.filter((item) => item !== id);
      }
      return [...items, id];
    });
  };

  useEffect(() => {
    savedHandleSelectCheckbox.current = handleSelectCheckbox;
  }, []);
  useEffect(() => {
    const handler = (event) => savedHandleSelectCheckbox.current(event);

    document.querySelector("#js-editable").addEventListener("change", handler);
    return () =>
      document
        .querySelector("#js-editable")
        .removeEventListener("change", handler);
  }, []);

  return (
    <div>
      <Datatable data={data} isEditable={isEditable} id="js-editable" />
    </div>
  );
}

export default EditableTable;
