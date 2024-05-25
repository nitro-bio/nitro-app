import { z } from "zod";
import { w } from "@utils/wretch";
import { useMutation, useQuery } from "react-query";
import { queryClient } from "../main";
export const UserSchema = z.object({
  id: z.coerce.number(),
  name: z.string().min(1),
  email: z.string().min(1),
});
export type User = z.infer<typeof UserSchema>;

const UserRequestSchema = z.object({
  foo: z.string(),
});
type UserRequest = z.infer<typeof UserRequestSchema>;
export const UserResponseSchema = z.array(UserSchema);

export const useUsers = ({ foo }: UserRequest) => {
  const queryFn = async () => {
    const query = UserRequestSchema.parse({ foo });
    const raw = await w.query(query).get("/api/users").json();
    const parsed = UserResponseSchema.parse(raw);
    return parsed;
  };

  const { data, isFetching, error } = useQuery({
    queryKey: ["fetch users"],
    queryFn: queryFn,
  });

  return {
    users: data,
    isFetchingUsers: isFetching,
    usersError: error as Error | null,
  };
};

// Define the payload for updating a user
const UpdateUserResponseSchema = z.object({
  status: z.literal("ok"),
});
export type UpdateUserResponse = z.infer<typeof UpdateUserResponseSchema>;
export const useUpdateUser = ({
  onSuccess,
  onError,
}: {
  onSuccess: (res: UpdateUserResponse) => void;
  onError: (e: Error) => void;
}) => {
  const postUpdate = async (user: User) => {
    const raw = await w.url("/api/users").post(user).json();
    const parsed = UpdateUserResponseSchema.parse(raw);
    return parsed;
  };
  const { mutate } = useMutation(postUpdate, {
    onSuccess: (res) => {
      onSuccess(res);
      queryClient.invalidateQueries({ queryKey: ["fetch users"] });
    },
    onError: (_error) => {
      console.error("Error during user update:", _error);
      const error = _error as Error;
      onError(error);
    },
  });
  return { updateUser: mutate };
};
