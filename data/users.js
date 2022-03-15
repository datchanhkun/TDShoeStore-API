import bcrypt from 'bcryptjs';
const users = [
  {
    name: "Admin Dat",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("123456a", 10),
    isAdmin: true
  },
  {
    name: "User 01",
    email: "user01@gmail.com",
    password: bcrypt.hashSync("123456a", 10)
  }
];

export default users;