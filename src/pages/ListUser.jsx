import Search from "../components/Search";
import UserCard from "../components/UserCard";

function ListUser() {
  return (
    <>
      <Search />
      <div className="user-container">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </>
  );
}

export default ListUser;
