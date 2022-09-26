import EditableTable from "./EditableTable";
import StaticTable from "./StaticTable";

const filterCompany = (data, value) => {
  return data.filter((item) => {
    return item.name.includes(value);
  });
};

function SwitchTables(props) {
  const { data, isEdit, selectedValue } = props;

  const filteredData = filterCompany(data, selectedValue);

  if (isEdit) {
    return <EditableTable {...props} data={filteredData} isEditable={true} />;
  }
  return <StaticTable data={data} />;
}

export default SwitchTables;
