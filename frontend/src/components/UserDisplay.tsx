import { useUsers, User } from "@api/users";
import { classNames } from "@ninjha01/nitro-ui";

export const UserDisplay = ({ className }: { className?: string }) => {
  const { users, isFetchingUsers, usersError } = useUsers({ foo: "bar" });

  if (isFetchingUsers) {
    return <div className={classNames("", className)}>Loading...</div>;
  }
  if (usersError) {
    return (
      <div className={classNames("", className)}>
        Error: {usersError.message}
      </div>
    );
  }
  if (!users) {
    return <div className={classNames("", className)}>No users found</div>;
  }
  return (
    <div className={classNames("px-8 py-6 text-base", className)}>
      <h1 className="text-4xl">Users (fetched from Backend)</h1>
      <ul className="mt-4 flex flex-col gap-2">
        {users.map((user: User) => (
          <li key={user.id} className="text-2xl text-brand-400">
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};
