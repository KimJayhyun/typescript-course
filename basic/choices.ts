// enum Role {
//   Admin,
//   Editor,
//   Guest,
// }

// let userRole: Role = Role.Admin;

// // ...

// userRole = Role.Editor;

type Role = "Admin" | "Editor" | "Guest";
type User = {
  name: string;
  age: number;
  role: Role;
  permissions: string[];
};

let userRole: Role = "Admin";

function access(role: Role) {}
