import Select from "react-select";

const SingleSelect = (props) => (
  <Select
    options={props.options}
    onChange={props.onChange}
    isClearable
    isSearchable
  />
);
export default SingleSelect;
