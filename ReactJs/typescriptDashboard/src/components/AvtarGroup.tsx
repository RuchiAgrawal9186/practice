import type { Collaborator } from "../assets/types/segment";

type AvatarGroupProps = {
  users: Collaborator[];
};
const AvtarGroup = ({users}:AvatarGroupProps) => {
  return (
    <div className="flex -space-x-2">
      {users.map((user,) => (
        <div
          key={user.id}
          className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white text-xs font-semibold"
          style={{
            backgroundColor: user.bgColor,
            color: user.textColor,
          }}
        >
          {user.name}
        </div>
      ))}
    </div>
  );
}

export default AvtarGroup
