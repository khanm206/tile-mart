"use client";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

import userIcon from "../assets/user_Icon.png";

const NavBar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  const getGreeting = () => {
    const hour = new Date().getHours();

    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";

    return "Good Night";
  };
  const router = useRouter();
  const pages = [
    <li key={"home"}>
      <NavLink href={"/"}>Home</NavLink>
    </li>,
    <li key={"tiles"}>
      <NavLink href={"/all_tiles"}>All Tiles</NavLink>
    </li>,
    <li key={"profile"}>
      <NavLink href={"/my_profile"}>My Profile</NavLink>
    </li>,
  ];
  return (
    <div className="navbar shadow-sm bgMe">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {...pages}
            <li>
              {user ? (
                <button
                  onClick={async () => {
                    await authClient.signOut();
                    router.refresh();
                  }}
                  className=" h-fit btnMe"
                >
                  Logout
                </button>
              ) : (
                <Link href={"/login"} className="btnMe h-fit">
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
        <Link href={"/"} className="">
          <Image
            src={"/logo.png"}
            alt="logo"
            width={100}
            height={50}
            priority
            className="md:w-38"
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl font-semibold">
          {...pages}
        </ul>
      </div>
      <div className="navbar-end">
        {isPending ? (
          "Loading..."
        ) : user ? (
          user.image ? (
            <div className="flex items-center gap-1 md:gap-2">
              <p className="text-xs md:text-base">
                {getGreeting()}, {user.name}
              </p>
              <Image
                src={user.image}
                alt="user icon"
                width={60}
                height={60}
                priority
                className="h-6 w-6 md:h-auto md:w-12 rounded-full"
              />
              <button
                onClick={async () => {
                  await authClient.signOut();
                  router.refresh();
                }}
                className="hidden lg:flex text-xl btnMe"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-1 md:gap-2">
              <p className="text-xs md:text-base">
                {getGreeting()}, {user.name}
              </p>
              <Image src={userIcon} alt="user icon" width={60} height={60} />
              <button
                onClick={async () => {
                  await authClient.signOut();
                  router.refresh();
                }}
                className="hidden lg:flex text-xl btnMe"
              >
                Logout
              </button>
            </div>
          )
        ) : (
          <Link href={"/login"} className="hidden lg:flex text-xl btnMe">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
