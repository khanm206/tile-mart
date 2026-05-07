"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const LoginForm = () => {
  const [showPass, setShowPass] = useState(false);
  const handleLogin = async (data) => {
    const { email, password } = data;
    const { data: res, error } = await authClient.signIn.email({
      email: email,
      password: password,
      rememberMe: true,
      callbackURL: "/",
    });
    if (error) {
      toast.error(error.message);
    }
    if (res) {
      toast.success("Login Successful");
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleGoogleSignin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <section className="">
      <form onSubmit={handleSubmit(handleLogin)}>
        <fieldset className="fieldset md:w-2xl">
          <label className="text-lg md:text-2xl font-semibold mb-4">
            Email address
          </label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="w-full bg-base-200 p-4 md:p-6 rounded md:text-xl"
            placeholder="Enter your email address"
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
          <br />
          <fieldset className="relative fieldset">
            <label className="text-lg md:text-2xl font-semibold mb-4">
              Password
            </label>
            <input
              type={showPass ? "text" : "password"}
              {...register("password", { required: "Password is required" })}
              autoComplete="current-password"
              className="w-full bg-base-200 p-4 md:p-6 rounded md:text-xl"
              placeholder="Enter your password"
            />
            <span
              className="absolute top-[60%] right-[10%]  hover:cursor-pointer"
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? <FaEyeSlash size={22} /> : <FaEye size={20} />}
            </span>
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </fieldset>

          <br />
          <button className="btnMe mt-4 md:text-2xl md:p-8">Login</button>
        </fieldset>
      </form>

      <div className="mt-4">
        <button
          onClick={handleGoogleSignin}
          className="btn flex items-center gap-2 border-2 rounded-md border-sky-600 text-sky-600 md:text-2xl py-2 md:py-6 w-full"
        >
          <FcGoogle /> Login with Google
        </button>
      </div>

      <div className="flex gap-2 items-center justify-center mt-8">
        <p className="text-sm md:text-xl font-semibold">
          Don't Have An Account ?
        </p>
        <Link
          href={"/register"}
          className="text-sm md:text-xl font-semibold text-red-600 hover:cursor-pointer"
        >
          Register
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
