import Table from "react-bootstrap/Table";

import "bootstrap/dist/css/bootstrap.min.css";
import Icon from "react-crud-icons";

import "../node_modules/react-crud-icons/dist/css/react-crud-icons.css";

const SpeciesList = ({ species }) => {
  console.log(species);
  let heading = [
    "Common Name",
    "Scientific Name",
    "population",
    "Conservation Status",
    "Created On",
    "Edit",
    "Delete",
  ];
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {heading.map((x, i) => (
            <th key={i}>{x}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {species.map((x, i) => (
          <tr key={i}>
            <th>{x.common_name}</th>
            <th>{x.scientific_name}</th>
            <th>{x.estimated_count}</th>
            <th>{x.conservation_status}</th>
            <th>{x.created_on}</th>
            <th>
              <Icon
                name="edit"
                tooltip="Edit"
                theme="light"
                size="medium"
                // onClick={doSomething}
              />
            </th>
            <th>
              <Icon
                name="delete"
                tooltip="Delete"
                theme="light"
                size="medium"
                // onClick={doSomething}
              />
            </th>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default SpeciesList;
