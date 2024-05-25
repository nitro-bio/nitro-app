import { useUpdateUser, UserSchema, User } from "@api/users";
import { zodResolver } from "@hookform/resolvers/zod";
import { classNames } from "@ninjha01/nitro-ui";
import { useForm } from "react-hook-form";

export const UserForm = ({ className }: { className?: string }) => {
  const { updateUser } = useUpdateUser({
    onSuccess: () => alert("User Updated!"),
    onError: (error: Error) => alert(`Update Failed: ${error.message}`),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(UserSchema),
    defaultValues: {
      id: 0,
      name: "",
      email: "",
    },
  });

  const onSubmit = (data: User) => {
    updateUser(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={classNames("form-control", className)}
    >
      <div className="mb-4">
        <label htmlFor="id" className="label">
          <span className="label-text">ID</span>
        </label>
        <input
          id="id"
          type="number"
          {...register("id")}
          className="input input-bordered w-full"
        />
        {errors.id && <p className="text-error">{errors.id.message}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="name" className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          id="name"
          {...register("name")}
          className="input input-bordered w-full"
        />
        {errors.name && <p className="text-error">{errors.name.message}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className="input input-bordered w-full"
        />
        {errors.email && <p className="text-error">{errors.email.message}</p>}
      </div>
      <button className="btn btn-primary" type="submit">
        Update User
      </button>
    </form>
  );
};
