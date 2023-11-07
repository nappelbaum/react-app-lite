import { NavLink } from "react-router-dom";

const TableRow = (props) => {
  return (
    <tr>
      <th scope="row">{props.index + 1}</th>
      <td>
        <NavLink to={"/profile/" + props.id}>
          {props.name} {props.lastname}
        </NavLink>
      </td>
      <td>{props.email}</td>
    </tr>
  );
};

export const Friends = (props) => {
  let users = props.function();
  console.log(users);
  let userCount = Object.keys(users).length;
  let userRow = [];
  for (let i = 0; i < userCount; i++) {
    userRow.push(
      <TableRow
        index={i}
        name={users[i].name}
        lastname={users[i].lastname}
        key={i}
        email={users[i].email}
        id={users[i].id}
      />
    );
  }
  return (
    <>
      <h1>Страница с Друзьями</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Фамилия и имя</th>
            <th scope="col">E-mail</th>
          </tr>
        </thead>
        <tbody>{userRow}</tbody>
      </table>
    </>
  );
};
