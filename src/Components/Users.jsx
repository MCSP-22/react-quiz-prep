import UsersItem from "./UsersItem";

const Users = ({ users }) => {
  // console.log(users);
  return users.map((user) => <UsersItem users={user} key={user.id} />);
};

export default Users;
