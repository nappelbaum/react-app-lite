const user = {
  id: "1",
  name: "Иван",
  lastname: "Иванов",
  email: "ivan@mail.ru",
  avatar:
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=300&q=70",
};

// const users = {
//   0: {
//     id: 5,
//     name: "Нина",
//     lastname: "Мальцева",
//     email: "ivan@mail.ru",
//     avatar:
//       "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=300&q=70",
//   },
//   1: {
//     id: 15,
//     name: "Константин",
//     lastname: "Есенин",
//     email: "const@mail.ru",
//     avatar:
//       "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=300&q=70",
//   },
//   2: {
//     id: 25,
//     name: "Ольга",
//     lastname: "Потапова",
//     email: "ivan@mail.ru",
//     avatar:
//       "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=300&q=70",
//   },
//   3: {
//     id: 35,
//     name: "Ксения",
//     lastname: "Цветкова",
//     email: "ivan@mail.ru",
//     avatar:
//       "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=300&q=70",
//   },
//   4: {
//     id: 45,
//     name: "Александр",
//     lastname: "Бородин",
//     email: "ivan@mail.ru",
//     avatar:
//       "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=300&q=70",
//   },
// };

let users = [];

export function getUser(userId) {
  for (let i = 0; i < Object.keys(users).length; i++) {
    if (users[i].id == userId) {
      return users[i];
    }
  }

  return user;
}

export async function getUsers() {
  let response = await fetch("https://aroma.bohohome.ru/getUsers");
  users = await response.json();

  return users;
}
