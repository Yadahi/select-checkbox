import Datatable from "./Datatable";

function StaticTable({ data }) {
  return (
    <div>
      <Datatable data={data} id="js-static" />
    </div>
  );
}

export default StaticTable;
