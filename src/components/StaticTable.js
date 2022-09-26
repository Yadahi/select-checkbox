import Datatable from "./Datatable";

function StaticTable({ data }) {
  return (
    <div>
      <Datatable
        data={data}
        id="js-static"
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
        }}
      />
    </div>
  );
}

export default StaticTable;
