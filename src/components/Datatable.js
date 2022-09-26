import { useEffect, useState } from "react";

import $jq from "jquery";
$jq.dt = require("datatables.net");

function Datatable({ id, data, isEditable = false, config }) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  function getTableEl() {
    return $jq("#" + id);
  }

  useEffect(() => {
    if (data.length > 0) {
      setItems(data);
    }
  }, []);

  //initialization of datatable
  useEffect(() => {
    if (!isLoaded) {
      getTableEl().DataTable({
        ...config,
        data: items,
      });
      console.log("isLoaded");
      setIsLoaded(true);
    } else {
      const api = getTableEl().DataTable();
      api.clear();
      console.log("clear");
      api.rows.add(items);
      api.draw();
      console.log("draw");
    }
  }, [items]);

  return (
    <div className={"wrapper"}>
      {!isLoaded && <div>Načítání...</div>}
      <table id={id} width="100%" />
    </div>
  );
}

export default Datatable;
