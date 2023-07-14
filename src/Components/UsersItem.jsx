const UsersItem = ({ users }) => {
  const handleClick = (e) => {
    console.log(e.currentTarget.id);
  };
  return (
    <div className="userCard" onClick={handleClick} id={users.id}>
      <h1>{users.name}</h1>
      <p>{users.email}</p>
    </div>
  );
};

export default UsersItem;
