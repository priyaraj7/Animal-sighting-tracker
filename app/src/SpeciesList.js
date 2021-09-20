import Table from "react-bootstrap/Table";

const SpeciesList = ({ species }) => {
  console.log(species);
  return (
    //species.map((x, i) => {
    //console.log(x);
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table>
    // });
  );
};

export default SpeciesList;
