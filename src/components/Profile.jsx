"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import userIcon from "../assets/user_Icon.png";

const Profile = () => {
  const { data: session, isPending } = authClient.useSession();

  const user = session?.user;

  if (isPending) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );
  }

  return (
    <section className="w-11/12 max-w-5xl mx-auto py-10">
      <div className="bgMe shadow-xl rounded-3xl p-5 md:p-10">
        <div className="flex flex-col items-center gap-8">
          {/* Profile Image */}
          <div className="rounded-full p-1 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500">
            <div className="rounded-full bg-white p-1">
              <Image
                src={user?.image || userIcon}
                alt="user image"
                width={500}
                height={500}
                priority
                className="w-40 h-40 md:w-72 md:h-72 object-cover rounded-full"
              />
            </div>
          </div>

          {/* User Info */}
          <div className="w-full overflow-x-auto">
            <table className="table w-full">
              <tbody className="text-sm md:text-xl">
                <tr>
                  <td className="font-bold w-1/2 md:w-1/3">Name</td>
                  <td className="break-all">{user?.name || "Not Available"}</td>
                </tr>

                <tr>
                  <td className="font-bold">Email</td>
                  <td className="break-all">
                    {user?.email || "Not Available"}
                  </td>
                </tr>

                <tr>
                  <td className="font-bold">Account Creation Date</td>
                  <td>
                    {user?.createdAt
                      ? new Date(user.createdAt).toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })
                      : "Not Available"}
                  </td>
                </tr>

                <tr>
                  <td className="font-bold">Last Updated Date</td>
                  <td>
                    {user?.updatedAt
                      ? new Date(user.updatedAt).toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })
                      : "Not Available"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
