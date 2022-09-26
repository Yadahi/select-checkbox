import { useEffect, useRef } from "react";
import Datatable from "./Datatable";

const CHECKBOX_CLASS_NAME = "js-prepare-item-table-checkbox-id";

function EditableTable({ data, tableItems, setTableItems, isEditable }) {
  console.log("editable data", data);
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

    document.addEventListener("change", handler);
    return () => document.removeEventListener("change", handler);
  }, []);

  return (
    <div>
      <Datatable
        data={data}
        isEditable={isEditable}
        id="js-editable"
        config={{
          searching: false,
          columns: [
            {
              data: "id",
              title: "id",
            },
            {
              data: "name",
              title: "name",
            },
            {
              data: "date",
              title: "date",
            },
            {
              data: "number",
              title: "number",
            },
          ],
          columnDefs: [
            {
              target: 0,
              sortable: false,
              render: function (id) {
                return `<input type="checkbox" class="${CHECKBOX_CLASS_NAME} dataTable--checkbox" data-checkbox-id="${id}" />`;
              },
            },
          ],
        }}
      />
    </div>
  );
}

export default EditableTable;
