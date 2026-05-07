"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import userIcon from "../assets/user_Icon.png";

const Profile = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  console.log();
  return (
    <>
      {isPending ? (
        <span className="loading loading-bars loading-xl"></span>
      ) : (
        <div className="flex flex-col justify-center items-center gap-6 ">
          <div className="rounded-full p-2 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 w-fit">
            <div className="rounded-full bg-white p-1">
              {user.image ? (
                <Image
                  src={user.image}
                  alt="user image"
                  width={500}
                  height={500}
                  priority
                  className="md:w-96 md:h-auto rounded-full"
                />
              ) : (
                <Image
                  src={userIcon}
                  alt="user image"
                  width={500}
                  height={500}
                  priority
                  className="md:w-96 md:h-auto rounded-full"
                />
              )}
            </div>
          </div>

          <table className="table md:text-2xl">
            <tbody className="text-3xl">
              <tr>
                <td className="font-semibold">Name</td>
                <td>{user.name}</td>
              </tr>
              <tr>
                <td className="font-semibold">Email</td>
                <td>{user.email}</td>
              </tr>
              <tr>
                <td className="font-semibold">Account Creation Date</td>
                <td>
                  {new Date(user.createdAt).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </td>
              </tr>
              <tr>
                <td className="font-semibold">Last Updated Date</td>
                <td>
                  {new Date(user.updatedAt).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Profile;
