"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";

const UpdateForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const handleUpdate = async (data) => {
    const { name, photo } = data;
    const { data: res, error } = await authClient.updateUser({
      image: photo,
      name: name,
      updatedAt: new Date().toISOString(),
    });
    if (error) {
      alert(error.message);
    }
    if (res) {
      alert(`account is successfully updated`);
      router.push("/my_profile");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleUpdate)}>
        <fieldset className="fieldset md:w-2xl">
          <label className="text-lg md:text-2xl font-semibold mb-2">
            Your Name
          </label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="w-full bg-base-200 p-4 md:p-6 rounded md:text-xl"
            placeholder="Enter your full name"
          />
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name.message}</p>
          )}
          <br />
          <label className="text-lg md:text-2xl font-semibold mb-2">
            Your Photo
          </label>
          <input
            type="text"
            {...register("photo")}
            className="w-full bg-base-200 p-4 md:p-6 rounded md:text-xl"
            placeholder="Enter your photo url"
          />
          <br />
          <button className="btnMe mt-4 md:text-2xl md:p-8">Update</button>
        </fieldset>
      </form>
    </div>
  );
};

export default UpdateForm;
