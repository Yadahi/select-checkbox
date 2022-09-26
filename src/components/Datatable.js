function Datatable({ id, data, isEditable = false }) {
  return (
    <table id={id}>
      <thead>
        <tr>
          <th>id</th>
          {isEditable && <th>input</th>}
          <th>name</th>
          <th>date</th>
          <th>number</th>
        </tr>
      </thead>
      <tbody>
        {data.slice(0, 100).map((row) => {
          return (
            <tr key={row.id}>
              <td>{row.id}</td>
              {isEditable && (
                <td>
                  <input type="checkbox" data-checkbox-id={row.id} />
                </td>
              )}
              <td>{row.name}</td>
              <td>{row.date}</td>
              <td>{row.number}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Datatable;
