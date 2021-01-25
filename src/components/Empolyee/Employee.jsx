import React from "react";

// employee information thats rendered in a row on the table
const Employee = (props) => {
  return (
    <tr>
      <th scope="row">
        <img alt="photo of employee" src={props.picture.thumbnail} />
      </th>
      <td>
        {props.name.first} {props.name.last}
      </td>
      <td>{props.phone}</td>
      <td>{props.email}</td>
      <td>{props.dob.date.substring(0, 10)}</td>
    </tr>
  );
};

export default Employee;